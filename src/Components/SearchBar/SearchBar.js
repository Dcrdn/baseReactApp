import React, { Component } from 'react'
import { AutoComplete } from 'antd';
const { Option } = AutoComplete;

export default class SearchBar extends Component {
    /*
        Universidad
        ¿Qué semestre?
        guests
    */
    state = {
        result: [],
      };
    
      //TODO: hacer la busqueda de acuerdo a lo que me sirve
      handleSearch = value => {
        let result;
        if (!value) {
          result = [];
        } else {
          result = ['ITESM GDA','ITESO'];
        }
        this.setState({ result });
      };
    
      render() {
        const { result } = this.state;
        const children = result.map(school => <Option key={school}>{school}</Option>);
        return (
          <AutoComplete style={{ width: '100%'}} onSearch={this.handleSearch} placeholder="Nombre de la escuela">
            {children}
          </AutoComplete>
        );
      }
}