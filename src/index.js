import ReactDOM from 'react-dom';
import React from 'react';

import React3 from 'react-three-renderer';
import * as THREE from 'three';
const OrbitControls = require('three-orbit-controls')(THREE);

class Simple extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {controls: {}};
  }

  GetControls(camRef) {
    let refRenderElement = document.getElementsByTagName("canvas")[0];
    const controls = new OrbitControls(camRef, refRenderElement);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.05;
    return controls;
  }

  componentDidMount() {
    this.setState({controls: this.GetControls(this.refs.camRef)})
  }

  render() {
    return (<React3
      mainCamera="camera"
      width={window.innerWidth}
      height={window.innerHeight}
      onAnimate={this.state.controls.update}
    >
      <scene>
        <perspectiveCamera
          name="camera"
          lookAt={new THREE.Vector3(0, 0, 0)}
          position={new THREE.Vector3(3, 1, 3)}
          ref="camRef"
        />
        <mesh>
          <boxGeometry
            width={1}
            height={1}
            depth={1}
          />
          <meshBasicMaterial
            color={0x00ff00}
          />
        </mesh>
      </scene>
    </React3>);
  }
}

ReactDOM.render(<Simple/>, document.body);