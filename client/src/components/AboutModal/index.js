import React, { useEffect, useState } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

function AboutModal() {
  const [open, setOpen] = useState(false);
  const isModalClosed = localStorage.getItem('modalClosed');

  useEffect(() => {
    if (!isModalClosed) {
      setOpen(true);
    }
  }, []);

  return (
    <Modal
      open={open}
      trigger={window.onload}
      className='about-modal'
    >
      <Modal.Description className='about-modal-desc'>
      <Header>About this site</Header>
        <p>
          This application allows the eldery and disabled to submit grocery orders for pickup, and allows citizens in the local community to volunteer their time to pick up the orders and drop them off. This is to allow those with fixed income to avoid excessive delivery charges.
        </p>
      </Modal.Description>
      <Modal.Actions>
        <Button color='green' onClick={() => {setOpen(false); return localStorage.setItem('modalClosed', 'true');}}>
          <Icon name='checkmark' /> Okay
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default AboutModal;