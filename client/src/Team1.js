import team1 from './images/team/team1.jpeg';

const Team1 = () => {

return (
  <div style={{textAlign: "center"}}>
  <h2 className="heading-primary-dk" style={{marginTop: "-5px"}}>Sasha Grutman</h2>
    <div style={{ textAlign: "left" }}>
      <img style={{ float: "left", marginRight: "24px" }} className="w-25 border-radius-md" src={team1} alt={"Sasha Grutman"}/>
      <p style={{marginLeft: "12px"}}>Mr. Grutman is a founder of Middlemarch Partners and co-leads the firm’s merchant banking and investing efforts. He has spent his entire career investing and advising high-growth financial services and business services companies that leverage technology to create sustainable advantage.</p>
      <h2 className="heading-secondary-dk" style={{ marginBottom: "-5px" }}>HIGHLIGHTS</h2>
      <p>  At Middlemarch, Mr. Grutman advises clients on business and capital strategy issues, has sourced over $730M of capital for clients, and serves as a board member for a number of Middlemarch clients and portfolio companies. He has deep domain expertise in specialty finance and transaction processing, sectors where he has been exceptionally active both as a merchant banker and as a private equity investor since 2002. Active with both private and public companies, he has participated in over $3.2B of transactions over the course of his career as a merchant banker and private equity investor.
</p>
      <p>Prior to founding Middlemarch Partners, Mr. Grutman served as a Partner at TH Lee Putnam Ventures, a $1B growth equity fund, where he co-led the firm’s financial services investments in specialty finance, insurance services, and electronic capital markets investments. Previously, he was a Managing Director at Citigroup where he oversaw the firm’s on balance sheet financial services private equity holdings as well as managed the bank’s $6 billion private equity fund-of-funds business. He has also held private equity investment roles at Goldman Sachs and Frontline Capital. </p>
      <div className="mb-4 mt-1 team-card-icon">
        <i class="fab fa-facebook-square 7x" style={{fontSize: "6rem"}}></i>&nbsp;&nbsp;
        <i class="fab fa-linkedin" style={{ fontSize: "6rem" }}></i>&nbsp;&nbsp;
        <i class="fab fa-twitter-square" style={{ fontSize: "6rem" }}></i>&nbsp;&nbsp;
        <i class="fas fa-envelope-square" style={{ fontSize: "6rem" }}></i>
      </div>
  </div>
  </div>
)

}

export default Team1;