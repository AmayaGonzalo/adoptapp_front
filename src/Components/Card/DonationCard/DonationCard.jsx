import './donationCard.css';

const DonationCard = ({ urlImg }) => {
    return (
        <article className='donation-card'>
            <img className='img-card-donation' src={urlImg} alt='donation-img'/>
        </article>
    )
}
export default DonationCard;