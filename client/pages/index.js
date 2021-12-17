import React, { useState, useEffect } from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://127.0.0.1:5000";

export default function Home() {

  // Connecting to the socket 
  // useEffect(() => {
  //   const socket = socketIOClient(ENDPOINT);
  //   socket.on("FromAPI", data => {
  //     console.log(data)
  //   });

  //   return () => socket.disconnect();
  // }, []);

  return (
    <div className="container2">
      <input type="text"/>
      <p>Chat</p>
    </div>
  )
}
