'use client';

import React from 'react';
import Button from './button';
import Accordion from './accordion';
import Icon from './icon';

const PrototypePage = () => {
  return (
    <div style={{ padding: "2rem", background: "pink" }}>
      <h1>UI 가이드 프로토타입 페이지</h1>

      <section>
        <h2>Button</h2>
        <Button />
      </section>

      <section>
        <h2>Accordion</h2>
        <Accordion />
      </section>

      <section>
        <h2>Icon</h2>
        <Icon />
      </section>

    </div>
  );
};

export default PrototypePage;