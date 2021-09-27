import React, {useState} from 'react';
import Head from 'next/head';
import config from '../data/config';
import { Formik, Form } from 'formik';
import publicIp from 'public-ip';
import axios from 'axios';

import {
  Box,
  Text,
  Link,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Select,
  Textarea,
  useToast
  } from '@chakra-ui/react';

export default function BenefitsComponent(props) {
  const toast=useToast();
  const webhook = require("webhook-discord");
  const Airtable = require("airtable");

  const Hook = new webhook.Webhook("https://discord.com/api/webhooks/891880596220043306/dEN4UcDKkRRu7u-Soez8w-mW9Y-nVIxuxbzc1faMj-_RXEdVb5mXP-t3dtZzzK121I9Z");

  const titleCase=(str) => { 
    return str.replace(/[a-z]/i, function (letter) { return letter.toUpperCase(); }).trim();
  } 

  const handleSubmit=async(data) => {
    data.ip = await publicIp.v4({
      fallbackUrls: ['https://ifconfig.co/ip']
    });

    //Post Webhook to discord
    let msg = await new webhook.MessageBuilder()
    .setName(titleCase(data.type)+ " Request")
    .setColor(data.type === 'stickers' ? "#a633d6" : "#338eda")
    .setTitle(`**${data.name} is requesting ${data.type}**`)
    .addField('Email', data.email)
    .addField('IP', `||${data.ip}||`)

    if (data.other) await msg.addField('Additional comments', data.other);

    await Hook.send(msg);

    await toast({
      title: "Request Submitted",
      description: "We've recieved your request!",
      status: "success",
      isClosable: true

        });

    await props.setOpen(false);
  }
  return (
    <>
    <Modal isOpen={props.open} onClose={() => props.setOpen(false)}>
      <ModalOverlay />   
        <ModalContent>
        <ModalHeader>
          Request {props.benefit ? (props.benefit === "repl.it" ? "Repl.it Hacker" : titleCase(props.benefit)) : "Benefits"}
        </ModalHeader>
        <ModalCloseButton />

        <Formik 
          initialValues={{name: '', email: '', type: props.benefit ?? "stickers", other: "", discord: ""}}
          onSubmit={(values, {setSubmitting}) => {
          handleSubmit(values);
          }}
        >
        {({values, errors, tocuhed, form, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
        <Form onSubmit={handleSubmit}>
          <ModalBody>
            {/*props.data.form*/}
            
            <FormControl>
              <Box mb={4}>
                <FormLabel>Full name <Text as="span" color="red">*</Text></FormLabel>
                <Input onChange={handleChange} value={values.name} type="text" name="name" placeholder="Full name" autoComplete="nope" isRequired/>
              </Box>
              <Box mb={4}>
                <FormLabel>Email <Text as="span" color="red">*</Text></FormLabel>
                <Input onChange={handleChange} value={values.email} type="email" name="email" placeholder="Email" autoComplete="on" isRequired/>
              </Box>
              
              {!props.benefit &&
                <Box mb={4}>
                  <FormLabel>What would you like? <Text as="span" color="red">*</Text></FormLabel>
                  <Select value={values.type} onChange={handleChange} name="type" isRequired>
                    <option value="stickers">Stickers</option>
                    <option value="repl.it">Repl.it Hacker</option>
                    <option value="notion">Notion Pro</option>
                    <option value="figma">Figma Pro</option>
                  </Select>
                </Box>
              }

              <Box mb={4}>
                <FormLabel>Additional comments</FormLabel>
                <Textarea
                  value={values.other}
                  name="other"
                  onChange={handleChange}
                  placeholder="Any additional requests or specifications?"
                  autoComplete="off"
                />
              </Box>
            </FormControl>
            <Text>By submitting, you agree to the <Link href="/benefits/honorcode" color="red" fontWeight="bold" isExternal>Benefits Honor Code</Link>.</Text>
            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </ModalFooter>
        </Form>)}
        </Formik>

      </ModalContent>
    </Modal>
    </>
  )
}