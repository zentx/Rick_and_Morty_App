import React, { Component } from 'react';
import { StyledTable } from './Table.styled';
import MaterialTable from 'material-table';



class MainTable extends Component{

    constructor(props) {
        super(props);
        this.state = {
          selectedRow: null
        }
    }
    

    render(){
        return(
            <StyledTable>
                <MaterialTable
                    title="Lista de Episodios"
                    columns={[
                        { title: 'Numero de Episodio', field: 'name'},
                        { title: 'Nombre', field: 'surname' },
                        { title: 'Fecha de Salida', field: 'birthYear', type: 'numeric' },
                        
                    ]}
                    data={[{ name: 'Mehmet', surname: 'Baran', birthYear: 1987 },
                    { name: 'Mehmet', surname: 'Baran', birthYear: 19873 },
                    { name: 'ABC', surname: 'Baran', birthYear: 1987 },
                    { name: 'DEF', surname: 'Baran', birthYear: 1987 },
                    { name: 'GHJK', surname: 'Baran', birthYear: 1987 },
                    { name: 'QW', surname: 'Baran', birthYear: 1987 } ]}
                    actions={[
                        {
                          icon: 'forward',
                          iconProps: {color: 'white'},    
                          tooltip: 'Consultar Personajes',
                          onClick: (event, rowData) => alert("You saved " + rowData.name)
                        }
                      ]}
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

export default MainTable;