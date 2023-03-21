import React from 'react'
// import logo from './logo.svg';
// import imagen from './modal.png';
import './App.css';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

function App() {
  const [open, setOpen] = React.useState(true)

  return (
    <div className="App">

      <Modal
        basic
        closeOnDimmerClick={false}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        // closeIcon
        style={{ position: 'initial' }}
        size='fullscreen'

      // trigger={<Button>Basic Modal</Button>}
      >
        {/* <Header icon>
        <Icon name='archive' />
        Archive Old Messages
      </Header> */}
        <Modal.Content style={{ textAlign: 'center' }}>
          <p>
            <Image src='https://kingdeportes.net/react-modal/modal.png' wrapped />
          </p>
        </Modal.Content>
        <Modal.Actions>
          {/* <Button basic color='red' inverted >
            <Icon name='remove' /> No
          </Button> */}
          <Button color='green' inverted onClick={()=>setOpen(false)}>
            <Icon name='checkmark' /> Entendido!
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default App;
