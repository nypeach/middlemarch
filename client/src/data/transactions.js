

var transactions =
  [
    {
      'Logo': 'veransa-300w.jpg',
      'Name': '',
      'Description': 'Yard waste recycling business',
      'MM': 'MM',
      'Type': 'Equity Raise',
      'Amount': '275,000,000',
      'Year': 2021,
      'Investor': 'RFE Investments; Middlemarch Capital Partners',
      'Order': 1
    },
    {
      'Logo': 'skykick-300w.jpg',
      'Name': '',
      'Description': 'Cloud automation SaaS company',
      'MM': 'MM',
      'Type': 'Debt and Equity Raise',
      'Amount': '130,000,000',
      'Year': 2021,
      'Investor': 'Morgan Stanley, Trebuchet Capital',
      'Order': 2
    },
    {
      'Logo': 'elevate-300w.jpg',
      'Name': '',
      'Description': 'Global outsourced legal services company.',
      'MM': 'MM',
      'Type': 'Equity Raise',
      'Amount': '25,000,000',
      'Year': 2020,
      'Investor': 'Kayne Anderson Partners',
      'Order': 3
    },
    {
      'Logo': 'mutuo-300w.jpg',
      'Name': '',
      'Description': 'Commercial Auto Leasing Company.',
      'MM': 'MM',
      'Type': 'Debt Raise',
      'Amount': '100,000,000',
      'Year': 2019,
      'Investor': 'Crayhill Capital Management',
      'Order': 4
    },
    {
      'Logo': 'channel-300w.jpg',
      'Name': '',
      'Description': 'Small business lender',
      'MM': 'MM',
      'Type': 'Equity Raise',
      'Amount': '45,000,000',
      'Year': 2018,
      'Investor': 'Elliot Capital Management',
      'Order': 5
    },
    {
      'Logo': 'Photonic-300w.jpg',
      'Name': '',
      'Description': 'Lease-to-own LED lighting company.',
      'MM': 'MM',
      'Type': 'Debt and Equity Raise',
      'Amount': '100,000,000',
      'Year': 2017,
      'Investor': 'Capstone Capital',
      'Order': 6
    },
    {
      'Logo': 'logo.jpeg',
      'Name': '',
      'Description': 'Energy equipment reseller.',
      'MM': 'MM',
      'Type': 'Debt Raise',
      'Amount': '10,000,000',
      'Year': 2016,
      'Investor': 'Old Lane Partners and Middlemarch Capital Partners',
      'Order': 7
    },
    {
      'Logo': 'FlexShopper-300w.jpg',
      'Name': '',
      'Description': 'Lease-to-own finance company.',
      'MM': 'MM',
      'Type': 'Equity Raise',
      'Amount': '22,000,000',
      'Year': 2016,
      'Investor': 'PIMCO and Middlemarch Capital Partners',
      'Order': 8
    },
    {
      'Logo': 'cream-300w.jpg',
      'Name': '',
      'Description': 'Online consumer lender',
      'MM': 'MM',
      'Type': 'Equity Raise',
      'Amount': '20,000,000',
      'Year': 2016,
      'Investor': 'Capitec Bank',
      'Order': 9
    },
    {
      'Logo': 'CapFusion-300w.jpg',
      'Name': '',
      'Description': 'Small business lender',
      'MM': 'MM',
      'Type': 'Debt Raise',
      'Amount': '60,000,000',
      'Year': 2016,
      'Investor': 'Main Street Financial',
      'Order': 10
    },
    {
      'Logo': 'logo.jpeg',
      'Name': '',
      'Description': 'Short-term consumer lender',
      'MM': 'MM',
      'Type': 'Debt Raise',
      'Amount': '17,500,000',
      'Year': 2015,
      'Investor': 'Bastion Capital',
      'Order': 11
    },
    {
      'Logo': 'FlexShopper-300w.jpg',
      'Name': '',
      'Description': 'Lease-to-own finance company.',
      'MM': 'MM',
      'Type': 'Debt Raise',
      'Amount': '100,000,000',
      'Year': 2015,
      'Investor': 'Waterfall Asset Management',
      'Order': 12
    },
    {
      'Logo': 'FlexShopper-300w.jpg',
      'Name': '',
      'Description': 'Lease-to-own finance company',
      'MM': 'MM',
      'Type': 'Equity Raise',
      'Amount': '9,350,000',
      'Year': 2015,
      'Investor': 'Waterfall Asset Management, Middlemarch Partners',
      'Order': 13
    },
    {
      'Logo': 'Privlo-300w.jpg',
      'Name': '',
      'Description': 'Non-conforming mortgage lender',
      'MM': 'MM',
      'Type': 'Debt Raise',
      'Amount': '350,000,000',
      'Year': 2014,
      'Investor': 'Waterfall Asset Management',
      'Order': 14
    },
    {
      'Logo': 'logo.jpeg',
      'Name': '',
      'Description': 'Online installment lender',
      'MM': 'MM',
      'Type': 'Debt Raise',
      'Amount': '25,000,000',
      'Year': 2014,
      'Investor': 'undisclosed',
      'Order': 15
    },
    {
      'Logo': 'BenchSymbol-300w.jpg',
      'Name': '',
      'Description': 'Outsourced accounting services',
      'MM': 'MM',
      'Type': 'Equity Investment',
      'Amount': '8,000,000',
      'Year': 2012,
      'Investor': 'Altos Ventures, Middlemarch Partners',
      'Order': 16
    },
    {
      'Logo': 'logo.jpeg',
      'Name': '',
      'Description': 'Online consumer lender',
      'MM': 'MM',
      'Type': 'Debt Raise',
      'Amount': '20,000,000',
      'Year': 2012,
      'Investor': 'Vector Capital',
      'Order': 17
    },
    {
      'Logo': 'logo.jpeg',
      'Name': '',
      'Description': 'Online consumer lender',
      'MM': 'MM',
      'Type': 'Equity Raise',
      'Amount': '80,000,000',
      'Year': 2012,
      'Investor': 'Vector Capital',
      'Order': 18
    },
    {
      'Logo': 'DriveFactor-300w.jpg',
      'Name': '',
      'Description': 'Insurance telematics for autos',
      'MM': 'PRIOR',
      'Type': 'Equity Raise',
      'Amount': '2,500,000',
      'Year': '',
      'Investor': 'Safeguard Scientifics',
      'Order': 19
    },
    {
      'Logo': 'BenchSymbol-300w.jpg',
      'Name': '',
      'Description': 'Outsourced accounting services',
      'MM': 'PRIOR',
      'Type': 'Equity Investment',
      'Amount': '2,000,000',
      'Year': '',
      'Investor': 'undisclosed, Middlemarch principals',
      'Order': 20
    },
    {
      'Logo': 'NexisCard-300w.jpg',
      'Name': '',
      'Description': 'Pre-paid debit card processor',
      'MM': 'PRIOR',
      'Type': 'Equity Raise',
      'Amount': '1,000,000',
      'Year': '',
      'Investor': 'Individual investors, Middlemarch principals',
      'Order': 21
    },
    {
      'Logo': 'CreditMax-300w.jpg',
      'Name': '',
      'Description': 'Charged-off credit trading platform',
      'MM': 'PRIOR',
      'Type': 'Debt Raise',
      'Amount': '5,500,000',
      'Year': '',
      'Investor': 'Metropolitan Partners, Partner Re',
      'Order': 22
    },
    {
      'Logo': 'CreditMax-300w.jpg',
      'Name': '',
      'Description': 'Charged-off credit trading platform',
      'MM': 'PRIOR',
      'Type': 'Equity Raise',
      'Amount': '2,500,000',
      'Year': '',
      'Investor': 'PartnerRe, Metropolitan Partners, Middlemarch principals',
      'Order': 23
    },
    {
      'Logo': 'AstorInvestment-300w.jpg',
      'Name': '',
      'Description': 'Actively Managed ETF Issuer',
      'MM': 'PRIOR',
      'Type': 'Acquisition',
      'Amount': '20,000,000',
      'Year': '',
      'Investor': 'Knight Capital',
      'Order': 24
    },
    {
      'Logo': 'Equiduct-300w.jpg',
      'Name': '',
      'Description': 'European Equity Exchange',
      'MM': 'PRIOR',
      'Type': 'Equity Raise',
      'Amount': '10,000,000',
      'Year': '',
      'Investor': 'Knight Capital',
      'Order': 25
    },
    {
      'Logo': 'Pico-300w.jpg',
      'Name': '',
      'Description': 'Capital Markets Technology',
      'MM': 'PRIOR',
      'Type': 'Equity Raise',
      'Amount': '6,500,000',
      'Year': '',
      'Investor': 'Knight Capital',
      'Order': 26
    },
    {
      'Logo': 'UrbanFinancial-300w.jpg',
      'Name': '',
      'Description': 'Reverse mortgage lender',
      'MM': 'PRIOR',
      'Type': 'Acquisition',
      'Amount': '25,000,000',
      'Year': '',
      'Investor': 'Knight Capital',
      'Order': 27
    },
    {
      'Logo': 'Knight-300w.jpg',
      'Name': '',
      'Description': 'Retail FX Trading',
      'MM': 'PRIOR',
      'Type': 'Sale',
      'Amount': 'Undisclosed',
      'Year': '',
      'Investor': 'FXCM',
      'Order': 28
    },
    {
      'Logo': 'Ballista-300w.jpg',
      'Name': '',
      'Description': 'Block Options Trading Platform',
      'MM': 'PRIOR',
      'Type': 'Equity Raise',
      'Amount': '12,000,000',
      'Year': '',
      'Investor': 'Knight Capital',
      'Order': 29
    },
    {
      'Logo': 'Currenex-300w.jpg',
      'Name': '',
      'Description': 'Foreign exchange trading platform',
      'MM': 'PRIOR',
      'Type': 'Acquisition',
      'Amount': '564,000,000',
      'Year': '',
      'Investor': 'State Street',
      'Order': 30
    },
    {
      'Logo': 'CashEdge-300w.jpg',
      'Name': '',
      'Description': 'SaaS payments and risk management platform',
      'MM': 'PRIOR',
      'Type': 'Equity Raise',
      'Amount': '32,000,000',
      'Year': '',
      'Investor': 'Susquehanna Growth Equity, RBC',
      'Order': 31
    },
    {
      'Logo': 'VelocityExpress-300w.jpg',
      'Name': '',
      'Description': 'Time-critical logistics company',
      'MM': 'PRIOR',
      'Type': 'Equity Raise',
      'Amount': '40,000,000',
      'Year': '',
      'Investor': 'Context Capital',
      'Order': 32
    },
    {
      'Logo': 'CheckSmart-300w.jpg',
      'Name': '',
      'Description': 'Check casher and short-term lender',
      'MM': 'PRIOR',
      'Type': 'Acquisition',
      'Amount': '180,000,000',
      'Year': '',
      'Investor': 'Diamond Castle',
      'Order': 33
    },
    {
      'Logo': 'New-300w.jpg',
      'Name': '',
      'Description': 'Outsourced insurance services company',
      'MM': 'PRIOR',
      'Type': 'Debt Raise',
      'Amount': '380,000,000',
      'Year': '',
      'Investor': 'CIBC',
      'Order': 34
    },
    {
      'Logo': 'New-300w.jpg',
      'Name': '',
      'Description': 'Outsourced insurance services company',
      'MM': 'PRIOR',
      'Type': 'Acquisition',
      'Amount': '271,000,000',
      'Year': '',
      'Investor': 'TH Lee Putnam Ventures',
      'Order': 35
    },
    {
      'Logo': 'ResMae-300w.jpg',
      'Name': '',
      'Description': 'Non-prime mortgage lender',
      'MM': 'PRIOR',
      'Type': 'Equity Raise',
      'Amount': '25,000,000',
      'Year': '',
      'Investor': 'TH Lee Putnam Ventures',
      'Order': 36
    }
  ]



export { transactions };