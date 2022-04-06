import React, { useState } from "react";
import { IResourceComponentsProps } from "@pankod/refine-core";

import {
    Create,
    Form,
    Input,
    Select,
    useForm,
    useSelect,
} from "@pankod/refine-antd";

import ReactMarkdown from "react-markdown";
import ReactMde from "react-mde";

import "react-mde/lib/styles/css/react-mde-all.css";

interface Motorist {
    name: string
}
export const MotoristCreate: React.FC<IResourceComponentsProps> = () => {
    const { formProps, saveButtonProps } = useForm<Motorist>({ action: "create", resource:"motorists",  });
    return (
        <Create saveButtonProps={saveButtonProps} title="create">
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label="Nome"
                    name="name"
                    rules={[{required: true,}]}>
                    <Input />
                </Form.Item>
            </Form>
        </Create>
    );
};