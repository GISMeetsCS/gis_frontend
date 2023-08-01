import React from 'react';
import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';

function Recovery() {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="email" title="Email">
        Tab content for email
        <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Nick-name" aria-label="Nickname" />
            <input class="form-control me-2" type="search" placeholder="Name" aria-label="Name" />
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </Tab>
      <Tab eventKey="pw" title="Password">
        Tab content for Password
        <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Email" aria-label="Email" />
            <input class="form-control me-2" type="search" placeholder="Nick-name" aria-label="Nickname" />
            <input class="form-control me-2" type="search" placeholder="Name" aria-label="Name" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
      </Tab>
    </Tabs>
  );
}

export default Recovery;