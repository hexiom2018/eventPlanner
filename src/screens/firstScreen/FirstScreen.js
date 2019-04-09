import React, { Component } from 'react';
import './FirstScreen.css';
import History from '../../history';
import Cattle from '../../assets/cattle.jpg'
class FirstScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card:
                [
                    {
                        name: 'Cattle Farm New Zealand',
                        price: 2000,
                        quantity: 1
                    },
                    {
                        name: 'Corn Field Vietnam',
                        price: 500,
                        quantity: 1
                    }
                ],
            total: 0
        }
    }

    quantityTotal() {
        const { card } = this.state
        var myPrice = 0
        card.map((items) => {
            myPrice += items.price * items.quantity
        })

        this.setState({
            total: myPrice
        })
    }

    componentWillMount() {

        this.quantityTotal()
    }

    subtract(items, index) {
        const { card } = this.state
        if (items.quantity > 1) {
            card[index].quantity = card[index].quantity - 1

            this.setState({ card }, () => {
                this.quantityTotal()
            })
        }
    }

    add(items, index) {
        const { card } = this.state
        if (items.quantity >= 1) {
            card[index].quantity = card[index].quantity + 1

            this.setState({ card }, () => {
                this.quantityTotal()
            })
        }
    }

    myCard(items, index) {
        return (
            <div className={'card'}>
                <div className={'pic'}>
                    <img src={Cattle} style={{ width: '100%', height: '100%' }} alt="Logo" />
                </div>
                <div>
                    <div style={{ flexBasis: '80%', padding: '0px 10px', color: 'grey' }}>
                        {items.name}
                    </div>
                    <div style={{ padding: '10px' }} className={'quantity'}>
                        <button style={items.quantity === 1 ? { backgroundColor: 'lightgrey', color: 'white', border: 'none', width: '25px' } : { border: 'none', width: '25px', backgroundColor: 'white', border: '1px solid lightgrey' }} onClick={() => this.subtract(items, index)}>
                            {'-'}
                        </button>
                        <div>
                            {items.quantity}
                        </div>
                        <button style={{ border: 'none', width: '25px', backgroundColor: 'white', border: '1px solid lightgrey' }} onClick={() => this.add(items, index)}>
                            {'+'}
                        </button>
                    </div>
                </div>
                <div>
                    {items.price}
                </div>
            </div>
        )
    }

    accountDetails() {
        const { total } = this.state
        return (
            <div className={'details'}>
                <div className={'account'}>
                    Account Details
                        </div>
                <div style={{ display: 'flex', flexBasis: '100%', flexWrap: 'wrap', padding: '10px' }}>
                    <div style={{ flexGrow: 1, fontWeight: 'bold', color: 'black', alignSelf: 'center' }}>
                        Bank Account:
                            </div>
                    <div style={{ textAlign: 'center' }}>
                        <div>
                            SEB 7987654777
                                </div>
                        <div>
                            Recipient HarvestMoon Inc
                                </div>
                    </div>
                </div>
                <div style={{ display: 'flex', flexBasis: '100%', flexWrap: 'wrap', padding: '10px' }}>
                    <div style={{ flexGrow: 1, fontWeight: 'bold', color: 'black' }}>
                        Deadline:
                            </div>
                    <div>
                        01 April 2019, 18.00
                            </div>
                </div>
                <div style={{ display: 'flex', flexBasis: '100%', flexWrap: 'wrap', padding: '10px' }}>
                    <div style={{ flexGrow: 1, fontWeight: 'bold', color: 'black' }}>
                        Amount to transfer:
                            </div>
                    <div style={{ color: 'orange' }}>
                        {`$ ${total}`}
                    </div>
                </div>
                <div className={'button'}>
                    <button>
                        Confirm
                            </button>
                </div>
            </div>
        )
    }

    render() {
        const { card } = this.state
        return (
            <div className="main-div">
                <div className={'left-content'}>
                    {
                        card &&
                        card.map((items, index) => {
                            return (
                                this.myCard(items, index)
                            )
                        })
                    }
                </div>
                <div className={'right-content'}>
                    {
                        this.accountDetails()
                    }
                </div>
            </div>
        )
    }
}


const styless = {
    root: {
        flexGrow: 1,
    },
    form: {
        alignItems: 'center',
        borderWidth: 2
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

export default FirstScreen;

