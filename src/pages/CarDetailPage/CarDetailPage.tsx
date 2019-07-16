import React from 'react';
import Layout from '../../containers/Layout';
import Select from '../../components/Select';

class CarDetailPage extends React.Component {
  render() {
    return (
      <Layout>
        <Select
          label="label"
          value={'1'}
          options={[
            { value: '1', text: 'bmw' },
            { value: '2', text: 'audi' },
            { value: '3', text: 'mini' }
          ]}
          onChange={() => {debugger}}
        />

      </Layout>
    )
  }
}

export default CarDetailPage;
