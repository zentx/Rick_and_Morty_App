import React, { Component, useState } from 'react';
import { StyledTable, StyledDiv } from './Comments.styled';
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
      const API = 'http://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id +'/comments';
      console.log(API);
      this.setState({ loading: true });
        
        try {
          const result = await axios.get(API);

          var data = new Array();
          data.push(...result.data);

          this.setState({
            data: data,
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
                    title="Lista de Comentarios"
                    columns={[
                        { title: 'ID Post', field: 'postId'},
                        { title: 'id', field: 'id'},
                        { title: 'Nombre', field: 'name' },
                        { title: 'Email', field: 'email' },
                        {title: 'Cuerpo', field: 'body' }

                        
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