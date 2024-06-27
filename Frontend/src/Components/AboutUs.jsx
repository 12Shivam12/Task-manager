import React from 'react'

const AboutUs = () => {
    return (
        <div className='poppins w-full'>

            <section className="p-6 w-[80%] m-auto ">
                <h2 className="text-5xl text-center font-semibold mt-10">Our Mission</h2>
                <div className='flex flex-col md:flex-row gap-10 mt-10  items-center'>
                    <img className='w-[50%] rounded-lg shadow-lg' src="https://img.freepik.com/premium-photo/businessman-clicks-virtual-screen-mission_1085052-7.jpg?size=626&ext=jpg" alt="" />
                    <p className="mt-6 text-gray-700">At TaskMaster, our mission is to empower individuals and teams to achieve their goals by providing a simple and effective task management tool. We believe that staying organized and managing tasks should be easy and accessible for everyone.</p>
                </div>

            </section>
            <section className="p-6 w-[80%] m-auto ">
                <h2 className="text-5xl text-center font-semibold mt-10">Our Vision</h2>
                <div className='flex flex-col md:flex-row gap-10 mt-10  items-center'>
                    <p className="mt-6 text-gray-700">Our vision is to become the leading task management app that transforms the way people organize their lives. We strive to create a product that not only helps users manage their tasks but also inspires them to be more productive and achieve more.</p>
                    <img className='w-[50%] rounded-lg shadow-lg' src="https://images.unsplash.com/photo-1501621667575-af81f1f0bacc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2lvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                </div>
            </section>

            <section className="p-6 w-[80%] m-auto mt-10">
                <h2 className="text-2xl font-semibold">Join Us</h2>
                <p className="mt-4 text-gray-700">We are always looking for talented individuals to join our team. If you share our passion for productivity and want to make a difference, check out our career opportunities and become a part of the TaskMaster family.</p>
                <button className="mt-4 px-4 py-2 bg-black text-white rounded">Careers</button>
            </section>
            <footer className="bg-black text-white p-4">
                <p className="text-center">© 2024 TaskMaster. All rights reserved.</p>
            </footer>




        </div>
    )
}

export default AboutUs
