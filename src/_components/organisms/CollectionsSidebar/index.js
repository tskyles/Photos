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

  const [inputs, setInputs] = useState({
    name: '',
    private_only: true,
    created_by: user_id,
    // create additional input to add to the users field
    users: [user_id]
  })
  const {name, private_only} = inputs;
  const [submitted, setSubmitted] = useState(false);
  const [collections, setCollections] = [];
  const [createCollection, setCreateCollection] = useState(false);

  function handleClick(e){
    e.preventDefault();
    setCreateCollection(!createCollection);
  }

  function handleInputChange(e){
    if (submitted) setSubmitted(false);
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  function handleFormSubmit(e){
    e.preventDefault();
    setSubmitted(true);
    if (Object.values(inputs).every(Boolean)) {
      console.log(inputs, props.token);
      dispatch(collectionsActions.createCollection(inputs, token))
    }
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
              <div>
                Private?
                <Input
                  name='privateView'
                  onChange={handleInputChange}
                  type='checkbox'
                  checked={private_only}
                  css={``} />
              </div>
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