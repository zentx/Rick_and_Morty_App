import React, { Component, useState } from 'react';
import { StyledTable, StyledDiv } from './Characters.styled';
import MaterialTable from 'material-table';
import { Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';

function AlertDismissible(props) {
    const [show, setShow] = useState(true);
  
    return (
      <>
        <Alert show={show} variant="light">
          <Alert.Heading>ERROR!</Alert.Heading>
          <p>
            
          </p>
          <hr />
        </Alert>
      </>
    );
  }

class Characters extends Component{

    constructor(props) {
        super(props);
        this.state = {
          selectedRow: null,
          loading: true,
          data: null,
          error: null,
        }
    }

    async componentDidMount() {
      const API = 'https://rickandmortyapi.com/api/episode/';
      const URL = 'https://rickandmortyapi.com/api/character/';
      const DEFAULT_QUERY = this.props.match.params.id;
      this.setState({ loading: true });
        
        try {
          const result = await axios.get(API + DEFAULT_QUERY);
          var arr = new Array();
        
          for(let i = 0; i < result.data.characters.length; i++){
            arr.push(result.data.characters[i].substring(42));
          }

          const data = await axios.get(URL + arr);

          this.setState({
            data: data.data,
            loading: false
          });
          
          this.props.updateChara();
        } catch (error) {
          this.setState({
            error,
            loading: false
          });
        }
    }

    render(){
        const { data, error, loading } = this.state;

        if (error) return <StyledTable> <AlertDismissible value={error.message} /></StyledTable>;

        if (loading) return <StyledDiv><Spinner animation="grow" variant="light" size="lg" /></StyledDiv>;

        return(

            <StyledTable>
                <MaterialTable
                    title="Lista de Personajes"
                    columns={[
                        { title: 'Nombre', field: 'name'},
                        { title: 'Estatus', field: 'status'},
                        { title: 'Especie', field: 'species' },
                        { title: 'Genero', field: 'gender' },
                        {title: 'Imagen', field: 'image', render: rowData => <img src={rowData.image} style={{width: 40, borderRadius: '50%'}}/> }

                        
                    ]}
                    data={data}
                    onRowClick={((evt, selectedRow) => this.setState({ selectedRow }))}
                    options={{
                        rowStyle: rowData => ({
                          backgroundColor: (this.state.selectedRow && this.state.selectedRow.tableData.id === rowData.tableData.id) ? '#32a852' : '#FFF'
                        }),
                        actionsColumnIndex: -1
                    }}
                />
            </StyledTable>
        );
    }
}

export default Characters;