// src/lab/LabAntForm.tsx

import { useState } from 'react'
import { Form, Input, Select, Button, Alert, Typography } from 'antd'

const { Title, Text } = Typography
const { Option } = Select

interface FormValues {
  name:  string
  email: string
  role:  string
}

export default function LabAntForm() {
  const [success, setSuccess] = useState(false)
  const [form] = Form.useForm<FormValues>()  // instancia tipada del formulario

  function onFinish(_values: FormValues) {
    setSuccess(true)
    form.resetFields()
    setTimeout(() => setSuccess(false), 3000)
  }

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 24 }}>
      <Title level={4} style={{ marginBottom: 4 }}>LAB: Form</Title>
      <Text type="secondary" style={{ display: 'block', marginBottom: 20 }}>
        Con Form.useForm, validación integrada y feedback.
      </Text>

      {success && (
        <Alert
          message="Registro enviado correctamente"
          type="success"
          showIcon
          style={{ marginBottom: 16 }}
        />
      )}

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{ maxWidth: 480 }}
      >
        <Form.Item
          label="Nombre completo"
          name="name"
          rules={[
            { required: true, message: 'El nombre es requerido' },
            { min: 2,         message: 'Mínimo 2 caracteres'    },
          ]}
        >
          <Input placeholder="Ana García" />
        </Form.Item>

        <Form.Item
          label="Correo electrónico"
          name="email"
          rules={[
            { required: true, message: 'El email es requerido'       },
            { type: 'email',  message: 'Formato de email inválido'   },
          ]}
        >
          <Input placeholder="ana@ejemplo.com" />
        </Form.Item>

        <Form.Item
          label="Rol"
          name="role"
          initialValue="viewer"
        >
          <Select>
            <Option value="viewer">Viewer</Option>
            <Option value="editor">Editor</Option>
            <Option value="admin">Admin</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">Registrar</Button>
        </Form.Item>
      </Form>
    </div>
  )
}