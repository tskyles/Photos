import 'styled-components/macro';
import React, {useState} from 'react';
import { Flexbox, PlusButton, Input, Button } from '../..';
import { If, Then } from '../../util';
import { useDispatch, useSelector } from 'react-redux';
import { collectionsActions } from '../../../_actions';

function CollectionsSidebar(props){
  const dispatch = useDispatch();

  const token = useSelector(state => state.authentication.token);
  const user_id = useSelector(state => state.authentication.user._id);

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
      created_by: user_id,
      // create additional input to add to the users field
      users: [user_id]
    }

    if (data.name){
      dispatch(collectionsActions.createCollection(data, token))
      setCreateCollection(false);
    }
  }

  function handleCheckbox(){
    setChecked(!checked);
  }

  return (
    <Flexbox css={`
      flex-direction: column;
      width: 25%;
      justify-content: flex-start;
      align-items: flex-start;
    `}>
      <h3>My Collections</h3>
      <PlusButton onClick={handleClick} text='Create New'/>
      <If condition={createCollection}>
        <Then>
          <form onSubmit={handleFormSubmit}>
            <Flexbox css={`
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
              <Button css={`
                width: 100px;
                height: 30px;
                font-weight: bold;
              `}>CREATE</Button>
            </Flexbox>
          </form>
        </Then>
      </If>

    </Flexbox>
  )
}

export default CollectionsSidebar;