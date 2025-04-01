import React from 'react'

export default function Info() {
    return (
        <>
            <div
                className="flex h-10 items-center flex-wrap border border-bottom border-gray-200 justify-center text-xs font-medium text-black">
                <span className="pr-0 lg:pr-3 after:ml-1.5 after:content-['|']">
                    <i className="fa-regular fa-address-card mr-2">Phone No:</i>1234567890</span>
                <span className="px-5 lg:px-0 lg:pr-3 after:ml-1.5 after:content-['|']">
                    <i className="fa-regular fa-envelope mr-2">Email:</i>Demo@demo.com</span>
                <span className="pr-0 lg:pr-3 after:ml-1.5">
                    <i className="fa-regular fa-paper-plane mr-2">Cutomer Care:</i>Info@demo.com</span>
            </div>
        </>
    )
}
