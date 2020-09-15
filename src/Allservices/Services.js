import React, { Component } from 'react'
import axios from 'axios'

import Addinational from './AddinationalServices/AddinationalSer'
import PurchasedSer from './Purchasedservices/PurchasedSer'
import TotalCosting from './TotalCosting/TotalCosting'
import './Service.css'

class Services extends Component {
  state = {
    loading: true,
    purData: [],
    selSer: []
  }

  componentDidMount () {
    axios
      .get('https://api.jsonbin.io/b/5efdf1000bab551d2b6ab1c9/1')

      .then(resp => {
        this.setState({ purData: resp.data.data.purchased_services,loading:false })
      })
  }
  render () {
    const totalCosting = []
    let purser = this.state.purData.map(pk =>
      pk.purchased_office_template.purchased_office_services.map(k => {
        if (k.service_selected != null) {
          totalCosting.push(k)
          return (
            <PurchasedSer
              key={k.id}
              mainText={pk.name}
              img={k.image}
              serName={k.name}
              price={k.price}
              decs={k.description}
            />
          )
        } else {
          return null
        }
      })
    )
    let addser = this.state.purData.map(pk =>
      pk.purchased_office_template.purchased_office_services.map(k =>
        k.service_selected == null ? (
          <Addinational
            key={k.id}
            mainText={pk.name}
            img={k.image}
            serName={k.name}
            price={k.price}
            decs={k.description}
          />
        ) : null
      )
    )
    let totalPrice = 0
    let totalCostComponet = totalCosting.map(tk => {
      totalPrice += +tk.price
      return <TotalCosting key={tk.id} serName={tk.name} serPrice={tk.price} />
    })

    return this.state.loading ?<h5 style={{textAlign:'center',fontSize:'36px'}}>Loading...</h5> : (
      <div className='serv'>
        <div className='serClass'>
          <div className='heading'> PURCHASED SERVICES</div> {purser}
        </div>
        <div className='totalPrice'>
          {totalCostComponet}
          <hr />
          <div className='totalCosting'>
            <div className='serName'>Total Costing</div>
            <div className='serPrice'>${totalPrice}/-</div>
          </div>
        </div>
        <hr />
        <div className='addClass'>
          <div className='heading'> ADDINATIONAL SERVICES</div>
          {addser}
        </div>
      </div>
    )
  }
}
export default Services
