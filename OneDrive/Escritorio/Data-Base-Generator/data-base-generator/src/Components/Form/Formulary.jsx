import { useState } from "react";
import './form.css'

const Form =()=>{
    const [formData,setFormData]= useState({
        country:'',
        city:'',
        cityFilter:'',
        placeType:'',
        scrap:false,
        phoneNumber:false,
        linkedin:false,
        facebook:false,
        email:false,
    });
    
    const handleChange = (e)=>{
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData({
            ...formData,
            [name]:newValue,
        });
    };
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(formData)
    }

    return(
        <div className="formWrapper">
            <form onSubmit={handleSubmit}>
                <div className="inputsWrapper">
                    <div className="input">
                        <label htmlFor="country">Country</label>
                        <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="city">City</label>
                        <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="cityFilter">City Filter</label>
                        <input
                        type="text"
                        id="cityFilter"
                        name="cityFilter"
                        value={formData.cityFilter}
                        onChange={handleChange}
                        />
                        
                    </div>
                    <div className="input">
                        <label htmlFor="placeType">Place Type</label>
                        <input
                        type="text"
                        id="placeType"
                        name="placeType"
                        value={formData.placeType}
                        onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="checkboxWrapper">
                    <div>
                        <label htmlFor="scrap">Desea scrapear datos de las web obtenidas: </label>
                        <input
                        type="checkbox"
                        id="scrap"
                        name="scrap"
                        value={formData.scrap}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="optionBoxesWrapper">
                        <div>
                            <label htmlFor="phoneNumber">Phone Number: </label>
                            <input
                            type="checkbox"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="linkedin">Linkedin: </label>
                            <input
                            type="checkbox"
                            id="linkedin"
                            name="linkedin"
                            value={formData.linkedin}
                            onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="facebook">Facebook: </label>
                            <input
                            type="checkbox"
                            id="facebook"
                            name="facebook"
                            value={formData.facebook}
                            onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email: </label>          
                            <input        
                            type="checkbox"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            />
                         </div>
                    </div>
                    
                </div>
                <div className="buttonWrapper">
                    <button type="submit">Generar Base De Datos</button>
                </div>
            </form>
        </div>
        
    )}
    export default Form;