"use client"
import React from 'react'
import { useCart } from '../store/cart-store'
import { useUser } from '../store/user-store'
import updateCartAfterSignedIn from './updateCartAfterSignedIn'
import { useEffect } from 'react'

export default function CartSync(){
    const cart = useCart()
    const {isAuthenticated} = useUser()
    const {uid} = useUser();

    useEffect(() =>{
        if(isAuthenticated && uid){
        updateCartAfterSignedIn(uid);
        }
    },[cart,isAuthenticated,uid]);

    return null;
}

