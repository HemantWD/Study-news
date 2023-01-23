import React from 'react'
import NewsItem from './NewsItem'

export default function News() {
    return (
        <div className='container my-3'>
            <h2>Study News: Top Headlines</h2>
            <div className="row">
                <div className="col-md-4">
                    <NewsItem title='muTitle' description='Daily News' imageUrl='https://live-production.wcms.abc-cdn.net.au/d718618805e29f723e0fa707421b0079?impolicy=wcms_crop_resize&cropH=2268&cropW=4032&xPos=0&yPos=0&width=862&height=485 ' />
                </div>
            </div>
        </div>
    )
}
