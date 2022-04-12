

import { IResourceComponentsProps, useMany } from "@pankod/refine-core";

import {
    List,
    Table,
    TextField,
    useTable,
    Space,
    EditButton,
    ShowButton,
    FilterDropdown,
    Select,
    DeleteButton,
} from "@pankod/refine-antd";

import api from "../../services/api";
import { IMotorist } from './interfaces';
import { useEffect, useState } from "react";

interface Motorist {
    id: number,
    name: string,
}

export function MotoristList() {
    
    const [motorists, setMotorists] = useState<Motorist[]>([]);
    

    
    useEffect(() => {
        api.get("/motorists/")
           .then((response) => {
             setMotorists(response.data)
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro : " + err);
            });
            
        }, []);

    return ( 
        <div>
            <List >
                <Table dataSource={motorists}>
                <Table.Column
                    dataIndex="id"
                    title="ID"
                />
                <Table.Column
                    key="name"
                    dataIndex="name"
                    title="Nome"
                />
                <Table.Column
                    key="veicle"
                    dataIndex="veicle"
                    title="Veiculo"
                />
                <Table.Column
                    key="name"
                    dataIndex="porcent"
                    title="Comissão"
                />
                <Table.Column
                    key="name"
                    dataIndex="porcent"
                    title="Status"
                />
                <Table.Column<IMotorist>
                    title="Ações"
                    dataIndex="actions"
                    render={(_, record) => (
                        <Space>
                            <EditButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                            <ShowButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                            <DeleteButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                        </Space>
                    )}
                />
                </Table>
                
            </List>
        </div>
        );}


        // <div> dataSource={motorists} columns={columns}
        //     {motorists.map(motorist => {
        //         return (
        //             <div key={1}>
        //                 <h1>{motorist.name}</h1>
        //             </div>
        //         )
        //     })}
        // </div>