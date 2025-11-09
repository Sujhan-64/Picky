"use client"
import React from 'react'

//sends data to API to upsert cart  after sign in
const updateCartAfterSignedIn = async (uid) => {
  
      const data = JSON.parse(localStorage.getItem("cart-storage"));
      const pidArray = data?.state?.cart?.map(
        (item) => item._id
      ) || [];

      const res = await fetch("/api/cart",{
        method : "PUT",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({uid,pidArray})
      })
}

export default updateCartAfterSignedIn
