import React, { useContext, useEffect, useState } from 'react'
import './Recommend.css'
import FoodItem from '../../components/FoodItem/FoodItem';
import { StoreContext } from '../../context/StoreContext';
import axios from "axios"

const Recommend = () => {


  const {url} = useContext(StoreContext)
  const [age, setAge] = useState('')
  const [showWeight, setShowWeight] = useState(false)
  const [weightOptions, setWeightOptions] = useState([]);
  const [weight, setWeight] = useState('');

  const [showFrekuensi, setShowFrekuensi] = useState(false);
  const [frekuensiOptions, setFrekuensiOptions] = useState([]);
  const [frekuensi, setFrekuensi] = useState('');

  const [recommendations, setRecommendations ] = useState([])

  const frequencyMapping = {
    tk1: {
        '≤6': ["2"],
        '7-9': ["1", "2"],
        '≥10': ["1"]
    },
    tk2: {
        '≤7': ["3"],
        '8-10': ["2","3"],
        '≥11': ["2"]
    },
    tk3: {
        '≤8': ["3","4"],
        '9-13': ["2","3"],
        '≥14': ["1","2"]
    }
  }

  const handleAgeChange = (event) =>{
    const selectedAge = event.target.value;
    setAge(selectedAge);
    setWeight('');
    setFrekuensi('');

    if(selectedAge === 'tk1'){
      setShowWeight(true);
      setWeightOptions(['≤6', '7-9','≥10']);
    } else if(selectedAge === 'tk2'){
      setShowWeight(true);
      setWeightOptions(['≤7', '8-10', '≥11']);
    } else if(selectedAge === 'tk3'){
      setShowWeight(true);
      setWeightOptions(['≤8', '9-13', '≥14']);
    } else{
      setShowWeight(false);
      setWeightOptions([]);
      setShowFrekuensi(false)
      setFrekuensiOptions([])
    }
  };

  const handleWeightChange = (event) =>{
    const selectedWeight = event.target.value;
    setWeight(selectedWeight);
    setFrekuensi('');
    if(selectedWeight && age){
      setShowFrekuensi(true)
      setFrekuensiOptions(frequencyMapping[age][selectedWeight]);
    }else{
      setShowFrekuensi(false);
      setFrekuensiOptions([]);
    }
  };

  const handleFrekuensiChange = (event) =>{
    setFrekuensi(event.target.value)
  }

  const showtheWeight = (item) =>{
    return <option key={item} value={item}>{item} kg</option>
  }

  const checkRecommendations = (data, selectedAge, selectedWeight, selectedFrekuensi) =>{
    return data.filter(item=> item.age === selectedAge && item.weight === selectedWeight && item.frekuensi === selectedFrekuensi);
  }
  const handleSubmit = async (event) =>{
    event.preventDefault();

    try {
        const response = await axios.get(`${url}/api/food/list`, {params: {age, weight, frekuensi}});
        //console.log(response.data.data)
        //const result = response.data.data
        const matchedRecommendations = checkRecommendations(response.data.data, age, weight, frekuensi);
        //console.log(matchedRecommendations)
        setRecommendations(matchedRecommendations)
        
    } catch (error) {
      console.log(error);
    }

  };

  useEffect(()=>{
    console.log('weight options: ', weightOptions);
  }, [weightOptions]);

  useEffect(()=>{
    console.log('weight options: ', frekuensiOptions);
  }, [frekuensiOptions]);

  useEffect(()=>{
    console.log('Recommendations : ', recommendations);
  }, [recommendations]);
  return (
    <div className='recc-container'>
      <div className="input-container">
          <h2 className="input-title">Find Recommendation For Your Children</h2>
          <p className="openingTitle">Pemberian Makanan Pendamping ASI adalah proses pemberian makanan dan cairan lainnya yang diberikan kepada bayi mulai usia 6 bulan ketika ASI saja tidak lagi mencukupi untuk memenuhi
kebutuhan gizinya. Sumber makanan diperoleh dari Kementrian Kesehatan Republik Indonesia Tahun 2022.</p>
          <div className="form-recommendation">
            <form action="" className="form-input-container" onSubmit={handleSubmit}>

              <label htmlFor="Usia">Usia</label>
              <select name="Usia" id="Usia" value={age} onChange={handleAgeChange}>
                <option value="">--Pilih Usia--</option>
                <option key="tk1" value="tk1">6-8 Bulan</option>
                <option key="tk2" value="tk2">9-11 Bulan</option>
                <option key="tk3" value="tk3">12-24 Bulan</option>
              </select>

              {showWeight && (
                  <div className="weight-container">
                  <label htmlFor="BeratBadan">Berat Badan</label>
                  <select name="BeratBadan" id="BeratBadan" value={weight} onChange={handleWeightChange}>
                    <option value="">--Pilih Berat Badan--</option>
                    {weightOptions.map(showtheWeight)}
                  </select>
                </div>

              )}

              {showFrekuensi && (
                <div className='frekuensi-container'>
                  <label htmlFor="Frekuensi">Frekuensi</label>
                  <select name="Frekuensi" id="Frekuensi" value={frekuensi} onChange={handleFrekuensiChange}>
                    <option value="">--Pilih Frekuensi--</option>
                    {frekuensiOptions.map(showtheWeight)}
                  </select>
                </div>
              )}

              <button type='submit'>Find Recommendation</button>
            </form>
          </div>
          <hr/>
      </div>
      <div className="recc-container">
        {recommendations.length > 0 && (
          <div className="recommendation-display">
            <div className="recommendation-display-list">
              {recommendations.map((item,index)=>{
                return <FoodItem key={index} id={item._id} name={item.name} description={item.description} image={item.image} />
              })}
            </div>
          </div>
        )}
      </div>
    </div>
    
  );
};

export default Recommend;
