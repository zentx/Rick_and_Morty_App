import React, { Component, useState } from 'react';
import { StyledTable, StyledDiv } from './Posts.styled';
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

    erasePost = (id) => {
      try {
      axios.delete('http://jsonplaceholder.typicode.com//posts/' + id);
      alert("El elemento fue borrado");
      const url = '/';
      return <Redirect to={url} />
      } catch (error) {
        alert("error");
        this.setState({
          error,
          loading: false
        });
      }
      
    }
    
    renderRedirect = () => {
      if (this.state.redirect) {
        const url = '/posts/' + this.state.id;
        return <Redirect to={url} />
      }
    }

    async componentDidMount() {
      const API = 'http://jsonplaceholder.typicode.com/posts?page=';
      const DEFAULT_QUERY = '1';
      this.setState({ loading: true });
    
        try {
          const result = await axios.get(API + DEFAULT_QUERY);
          var data = new Array();
          data.push(...result.data);
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
                    title="Lista de Posts"
                    columns={[
                        { title: 'id', field: 'id'},
                        { title: 'ID Usuario', field: 'userId' },
                        { title: 'Titulo', field: 'title' },
                        { title: 'Cuerpo', field: 'body' },
                        
                    ]}
                    data={data}
                    actions={[
                        {
                          icon: 'forward',   
                          tooltip: 'Consultar Comentarios',
                          onClick: (event, rowData) => { this.setState({id: rowData.id}); this.setRedirect(); }
                        },
                        {
                          icon: 'delete',
                          tooltip: 'Borrar post',
                          onClick: (event, rowData) => { this.setState({id: rowData.id}); this.erasePost(rowData.id); }
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
                          actions: 'Consultar Comentarios'
                        },
                      }}
                />
            </StyledTable>
        );
    }
}

export default MainTable;