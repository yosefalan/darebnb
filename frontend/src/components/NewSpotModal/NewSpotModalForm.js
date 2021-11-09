import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { addNewSpot } from "../../store/spots";
import '../LoginFormModal/form.css';

function NewSpotModalForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const userId = sessionUser.id
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [price, setPrice] = useState(null);
  const [errors, setErrors] = useState([]);
  const [images, setImages] = useState([]);

  if (!sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = [];
    dispatch(addNewSpot({
      userId,
      address,
      city,
      state,
      country,
      lat,
      lng,
      name,
      price,
      images
    }))
    .then(() => {
      setAddress("");
      setCity("");
      setState("");
      setCountry("");
      setLat(null);
      setLng(null);
      setPrice(null);
      setImages(null);
    })
    .catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) {
        newErrors = data.errors;
        setErrors(newErrors);
      }
      });
  };

     const updateFiles = (e) => {
      const files = e.target.files;
      setImages(files);
    };


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (password === confirmPassword) {
  //     setErrors([]);
  //     return dispatch(sessionActions.signup({ title, url, password }))
  //       .catch(async (res) => {
  //         const data = await res.json();
  //         if (data && data.errors) setErrors(data.errors);
  //       });
  //   }
  //   return setErrors(['Confirm Password field must be the same as the Password field']);
  // };

  return (
    <div className="formContainer">
      <form
      onSubmit={handleSubmit}
      className="form">
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <input
            type="text"
            className="field"
            placeholder="Place Name"
            autocomplete="new-password"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />
          <input
            type="text"
            className="field"
            placeholder="Address"
            autocomplete="new-password"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            />
            <input
            type="text"
            className="field"
            placeholder="City"
            autocomplete="new-password"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            />
          <input
            type="text"
            className="field"
            placeholder="State (if in the USA)"
            autocomplete="new-password"
            value={state}
            onChange={(e) => setState(e.target.value)}
            />
            <input
            type="text"
            className="field"
            placeholder="Country"
            autocomplete="new-password"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
            />
             <input
            type="text"
            className="field"
            placeholder="Lattitude"
            autocomplete="new-password"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
            required
            />
             <input
            type="text"
            className="field"
            placeholder="Longitude"
            autocomplete="new-password"
            value={lng}
            onChange={(e) => setLng(e.target.value)}
            required
            />
            <input
            type="text"
            className="field"
            placeholder="Price (per night)"
            autocomplete="new-password"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            />
            <div className="buttonsContainer">
              <label className="uploadLabel">
              Image Upload
              <input
                type="file"
                multiple
                onChange={updateFiles} />
                </label>
                <button type="submit" id="submitButton"
                className="spotSubmitButton"
                >Submit</button>
            </div>
      </form>
    </div>
  );
}

export default NewSpotModalForm;
