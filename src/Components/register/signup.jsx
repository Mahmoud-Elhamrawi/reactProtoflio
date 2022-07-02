import React from 'react'
import { useForm  , Controller } from "react-hook-form";
import ReactSelect from 'react-select';

export default function Signup() {

 const{register ,handleSubmit ,formState:{errors}, control , watch}=useForm();
 
  const submite= (data)=>{
  

  console.log(data);

  }




  const Myoptions = [

    { value: 'swimming', label: 'swimming' },
    { value: 'football', label: 'football' },
    { value: 'baskbool', label: 'baskbool' }
  ]

  const Mycolors = [

    { value: 'red', label: 'red' },
    { value: 'green', label: 'green' },
    { value: 'blue', label: 'blue' }
  ]

  return (
    <>
    <h2 style={{textAlign: 'center', marginTop:'15px'}} >Create New Account</h2>
  
    <div className="form-wrapper w-75 mx-auto shadow border p-3">

            <form className='my-5' onSubmit={handleSubmit(submite)}> 

                    <form-group className='d-flex justify-content-center'>
                        <label  htmlFor="Fname">full Name :</label>
                        <input type="text" id='Fullname'  className='form-control my-3'  {...register('Fullname', { required: true, minLength: 2 })} />
                        {
                        ( errors.Fullname &&  errors.Fullname.type === 'required' ) && 
                        <p className='alert alert-danger text-center'>{errors.Fullname.type}</p>

                        }

                        {
                        ( errors.Fullname &&  errors.Fullname.type === 'maxLength' ) && 
                        <p className='alert alert-danger text-center'>{errors.Fullname.type}</p>
                        }
                    

                    </form-group>

                    <form-group className='d-flex justify-content-center'>
                    <label  htmlFor="Message">Message :</label>
                        <textarea type="text" id='Message' {...register('Message',{required:true , minLength:5 ,maxLength:200} )} className='form-control my-3' ></textarea>
                    
                        {
                            ( errors.Message &&  errors.Message?.type === 'required' ) && 
                            <p className='alert alert-danger text-center'>{errors.Message.type}</p>
                        }
                    

                        {
                            ( errors.Message &&  errors.Message?.type === 'minLength' ) && 
                            <p className='alert alert-danger text-center'>{errors.Message.type} : 5 </p>
                        }


                        {
                            ( errors.Message &&  errors.Message?.type === 'maxLength' ) && 
                            <p className='alert alert-danger text-center'>{errors.Message.type} : 200</p>
                        }
                    </form-group>

                    <form-group className='d-flex justify-content-center'>
                        <label  htmlFor="Telephone">Telephone :</label>
                        <input type="number" id='Telephone' {...register('Telephone',{required:true , min:11 } )} className='form-control my-3' />
                    
                        {
                            ( errors.Telephone &&  errors.Telephone?.type === 'required' ) && 
                            <p className='alert alert-danger text-center'>{errors.Telephone.type}</p>
                        }
                    
                    </form-group>

                    <form-group className='d-flex justify-content-center'>
                        <label  htmlFor="email">Email :</label>
                        <input type="email" id='email'  {...register('email',{required:true , pattern:/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/})} className='form-control my-3' />
                
                        {
                        ( errors.email &&  errors.email?.type === 'required' ) && 
                        <p className='alert alert-danger text-center'>{errors.email.type}</p>
                        }

                        {
                            ( errors.email &&  errors.email?.type === 'pattern' ) && 
                            <p className='alert alert-danger text-center'>error {errors.email.type}  : 
                            Matche : asmith@mactec.com | foo12@foo.edu | bob.smith@foo.tv
                            <br/> Non-Matches	: joe | @foo.com | a@a</p>
                        }
                    </form-group>
            
                        <div className="row">
                            <div className="col-md-6">
                            <form-group className='d-flex justify-content-center'>
                                        <label  htmlFor="Password">Password :</label>
                                        <input type="password" id='Password' {...register('Password',{required:true , min:5, max:20})} className='form-control my-3' />
                                        {
                                        ( errors.Password &&  errors.Password?.type === 'required' ) && 
                                        <p className='alert alert-danger text-center'>{errors.Password.type}</p>
                                        }

                                        {
                                            ( errors.Password &&  errors.Password?.type === 'min' ) && 
                                            <p className='alert alert-danger text-center'>{errors.Password.type}</p>
                                        }

                                        {
                                            ( errors.Password &&  errors.Password?.type === 'max' ) && 
                                            <p className='alert alert-danger text-center'>{errors.Password.type}</p>
                                        }
                                    
                                    </form-group>

                            </div>
                            <div className="col-md-6">
                            <form-group className='d-flex justify-content-center'>
                                        <label  htmlFor="Password">Confrim Password :</label>
                                        <input type="password" id='CPassword' {...register('CPassword',{required:true , min:5, max:20})} className='form-control my-3' />
                                        {
                                        ( errors.CPassword &&  errors.CPassword?.type === 'required' ) && 
                                        <p className='alert alert-danger text-center'>{errors.CPassword.type}</p>
                                        }

                                        {
                                            ( errors.CPassword &&  errors.CPassword.type === 'min' ) && 
                                            <p className='alert alert-danger text-center'>{errors.CPassword.type}</p>
                                        }

                                        {
                                            ( errors.CPassword &&  errors.CPassword.type === 'max' ) && 
                                            <p className='alert alert-danger text-center'>{errors.CPassword.type}</p>
                                        }
                                    
                                    
                                    </form-group>
                            </div>
                        </div>
                    
                <div className="row mb-5">
                    <div className="col-md-6">
                
                        <Controller
                                name="select"
                                control={control}
                                render={({ field }) => <ReactSelect 
                                {...field} 
                                options={Myoptions}
                                isMulti 
                                isSearchable
                                placeholder='select Hoppies' 
                                />}
                            />
                    </div>
                    <div className="col-md-6">

                    <Controller
                                name="select2"
                                control={control}
                                render={({ field }) => <ReactSelect 
                                {...field} 
                                options={Mycolors}
                                isMulti 
                                isSearchable
                                placeholder='select Colors' 
                                />}
                            />
                    </div>
                </div>


                <button type='submit'   className='btn btn-info d-block mx-auto ' >Submit</button>
            </form>
     </div> 
    
    </>
  )
}
