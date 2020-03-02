import React, { Component, useState } from 'react';
import { StyledTable, StyledDiv } from './Episodes.styled';
import MaterialTable from 'material-table';
import { Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom'


function AlertDismissible(props) {
    const [show, setShow] = useState(true);
  
    return (
      <>
        <Alert show={show} variant="light">
          <Alert.Heading>ERROR!</Alert.Heading>
          <p>
            { props.value }
          </p>
          <hr />
        </Alert>
      </>
    );
  }



class MainTable extends Component{

    constructor(props) {
        super(props);
        this.state = {
          selectedRow: null,
          id: 0,
          loading: true,
          data: null,
          error: null,
          redirect: false,
        }
    }

    setRedirect = () => {
      this.setState({
        redirect: true
      })
    }  
    
    renderRedirect = () => {
      if (this.state.redirect) {
        const url = '/characters/' + this.state.id;
        return <Redirect to={url} />
      }
    }

    async componentDidMount() {
      const API = 'https://rickandmortyapi.com/api/episode?page=';
      const DEFAULT_QUERY = '1';
      this.setState({ loading: true });
    
        try {
          const result = await axios.get(API + DEFAULT_QUERY);
          var data = new Array();
          data.push(...result.data.results);
          if(result.data.info.pages > 1){
            for(let i = 2; i <= result.data.info.pages; i++){
                let resp = await axios.get(API + i);
                data.push(...resp.data.results);
            }
          }
          this.setState({
            data: data,
            loading: false
          });
          this.props.updateHome();
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
                {this.renderRedirect()}
                <MaterialTable
                    title="Lista de Episodios"
                    columns={[
                        { title: 'Numero de Episodio', field: 'id'},
                        { title: 'Nombre', field: 'name' },
                        { title: 'Fecha de Salida', field: 'air_date', type: 'date' },
                        
                    ]}
                    data={data}
                    actions={[
                        {
                          icon: 'forward',   
                          tooltip: 'Consultar Personajes',
                          onClick: (event, rowData) => { this.setState({id: rowData.id}); this.setRedirect(); }
                        }
                      ]}
                    onRowClick={((evt, selectedRow) => this.setState({ selectedRow }))}
                    options={{
                        rowStyle: rowData => ({
                          backgroundColor: (this.state.selectedRow && this.state.selectedRow.tableData.id === rowData.tableData.id) ? '#32a852' : '#FFF'
                        }),
                        actionsColumnIndex: -1
                    }}
                    localization={{
                        header: {
                          actions: 'Consultar Personajes'
                        },
                      }}
                />
            </StyledTable>
        );
    }
}

export default MainTable;