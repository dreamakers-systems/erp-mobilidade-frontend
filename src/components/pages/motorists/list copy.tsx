

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

export const MotoristList: React.FC<IResourceComponentsProps> = () => {
    const { tableProps } = useTable<IMotorist>({
        metaData: {
            fields: ["id", "name"]}})
        


    return ( 
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column
                    dataIndex="id"
                    title="ID"
                />
                <Table.Column
                    key="name"
                    dataIndex="name"
                    title="NOME"
                />
                <Table.Column<IMotorist>
                    title="Actions"
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
    );
};