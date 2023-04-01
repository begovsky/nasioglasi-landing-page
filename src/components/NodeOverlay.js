import React, { Component } from 'react';
import Image from 'next/image';
import styles from '@/styles/components/NodeOverlay.module.scss';

class NodeOverlay extends Component {
  render() {
    return (
      <>
        <Image 
          src="/images/node.svg" 
          width={300} 
          height={300} 
          alt="Background Circle Image"
          className={styles.node_one}
        />
        <Image 
          src="/images/node-light.svg" 
          width={300} 
          height={300} 
          alt="Background Circle Image"
          className={styles.node_two}
        />
        <Image 
          src="/images/node-light.svg" 
          width={300} 
          height={300} 
          alt="Background Circle Image"
          className={styles.node_three}
        />
        <Image 
          src="/images/node-light.svg" 
          width={300} 
          height={300} 
          alt="Background Circle Image"
          className={styles.node_four}
        />
      </>
    );
  }
}

export default NodeOverlay;
