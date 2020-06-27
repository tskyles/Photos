import 'styled-components/macro';
import React, {useState, useEffect} from 'react';
import { Flexbox, PlusButton, Input, Button, SideBarMenu, H3 } from '../..';
import { If, Then } from '../../util';
import { useDispatch, useSelector } from 'react-redux';
import { collectionsActions } from '../../../_actions';

function CollectionsSidebar(){
  const dispatch = useDispatch();

  const userID = useSelector(state => state.authentication.user._id);

  const [submitted, setSubmitted] = useState(false);
  const [createCollection, setCreateCollection] = useState(false);
  const [checked, setChecked] = useState(true);
  const [name, setName] = useState('')

  function handleClick(e){
    e.preventDefault();
    setCreateCollection(!createCollection);
  }

  function handleInputChange(e){
    if(submitted) setSubmitted(false);
    setName(e.target.value);
  }

  function handleFormSubmit(e){
    e.preventDefault();
    setSubmitted(true);

    const data = {
      name: name,
      private_only: true,
      created_by: userID,
      // create additional input to add to the users field
      users: [userID]
    }

    if (data.name){
      dispatch(collectionsActions.createCollection(data))
      setCreateCollection(false);
    }
  }

  useEffect(() => {
    dispatch(collectionsActions.getCollections(userID))
  }, [dispatch, userID])

  function handleCheckbox(){
    setChecked(!checked);
  }

  return (
    <Flexbox 
      css={`
        position: fixed;
        left: 0;
        top: 10%;
        z-index: 999;
        flex-direction: column;
        width: 24%;
        justify-content: flex-start;
        align-items: flex-end;
      `}>
      <Flexbox 
        css={`
          width: 35%;
          flex-direction: column;
          // background-color: #ffffff;
          `}>
        <Flexbox
          css={`
          width: 100%;
            justify-content: space-between;
          `}>
          <H3
            css={`
              font-size: .75em;
            `}>Collections</H3>
          <a
            css={`
              font-size: .75em;
            `}
            href={'#0'}
            onClick={handleClick}>Edit</a>
        </Flexbox>
        <SideBarMenu />
        <If condition={createCollection}>
          <Then>
            <form onSubmit={handleFormSubmit}>
              <Flexbox 
                css={`
                  flex-direction: column;
                  align-items: flex-start;
                  `}>
                <Input
                  placeholder='Name'
                  name='name'
                  onChange={handleInputChange}
                  type='text'
                  value={name}
                  css={``} />
                <label>
                  Private?
                <Input
                    name='privateView'
                    type='checkbox'
                    checked={checked}
                    onChange={handleCheckbox}
                    css={``} />
                </label>
                <Button 
                  css={`
                    width: 100px;
                    height: 30px;
                    font-weight: bold;
                  `}>CREATE</Button>
              </Flexbox>
            </form>
          </Then>
        </If>
      </Flexbox>
    </Flexbox>
  )
}

export default CollectionsSidebar;