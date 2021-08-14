
var team = [
  {
    'name': 'Sasha Grutman',
    'title': 'Partner',
    'quote': 'Some brilliant, funny and witty quote',
    'facebook': 'https://www.facebook.com/sasha.grutman/',
    'linkedin': 'https://www.linkedin.com/in/sasha-grutman-45a38/',
    'twitter': '',
    'email': 'mailto:sgrutman@middlemarchllc.com',
    'photo': 'team1.jpeg'
  },
  {
    'name': 'Demetris Papademetriou',
    'title': 'Partner',
    'quote': 'Some brilliant, funny and witty quote',
    'facebook': 'https://www.facebook.com/demetris.papademetriou.37/',
    'linkedin': 'https://www.linkedin.com/in/dpapad/',
    'twitter': '',
    'email': 'mailto:dpapademetriou@middlemarchllc.com',
    'photo': 'team3.jpeg'
  },
  {
    'name': 'Alexander Mack',
    'title': 'CFO & CCO',
    'quote': 'Some brilliant, funny and witty quote',
    'facebook': '',
    'linkedin': 'https://www.linkedin.com/in/alexmackcompliance/',
    'twitter': '',
    'email': 'mailto:amack@middlemarchllc.com',
    'photo': 'team2.jpeg'
  },
  {
    'name': 'Elliot Weinberg',
    'title': 'Vice President',
    'quote': 'Some brilliant, funny and witty quote',
    'facebook': '',
    'linkedin': '',
    'twitter': '',
    'email': 'mailto:eweinberg@middlemarchllc.com',
    'photo': 'team4.jpeg'
  },
  {
    'name': 'Alexander Mack',
    'title': 'CFO & CCO',
    'quote': 'Some brilliant, funny and witty quote',
    'facebook': '',
    'linkedin': 'https://www.linkedin.com/in/alexmackcompliance/',
    'twitter': '',
    'email': 'mailto:amack@middlemarchllc.com',
    'photo': 'team2.jpeg'
  },
  {
    'name': 'Elliot Weinberg',
    'title': 'Vice President',
    'quote': 'Some brilliant, funny and witty quote',
    'facebook': '',
    'linkedin': '',
    'twitter': '',
    'email': 'mailto:eweinberg@middlemarchllc.com',
    'photo': 'team4.jpeg'
  }
];

var transactions =
  [
    {
      'Logo': 'ResMae.jpeg',
      'Name': '',
      'Division': 'Principal',
      'Industry': 'Mortgage Finance',
      'Type': 'Growth Equity Investment',
      'Amount': '25,000,000',
      'Year': 2003,
      'Month': 10,
      'Date': 'October 2003'
    },
    {
      'Logo': 'New.jpeg',
      'Name': '',
      'Division': 'Principal',
      'Industry': 'Business Services',
      'Type': 'Growth Buyout',
      'Amount': '271,000,000',
      'Year': 2004,
      'Month': 7,
      'Date': 'July 2004'
    },
    {
      'Logo': 'New.jpeg',
      'Name': '',
      'Division': 'Principal',
      'Industry': 'Business Services',
      'Type': 'Secured Credit Facility',
      'Amount': '380,000,000',
      'Year': 2005,
      'Month': 7,
      'Date': 'July 2005'
    },
    {
      'Logo': 'CheckSmart.jpeg',
      'Name': '',
      'Division': 'Advisory',
      'Industry': 'Underbanked Services',
      'Type': 'Management Buyout',
      'Amount': '180,000,000',
      'Year': 2005,
      'Month': 8,
      'Date': 'August 2005'
    },
    {
      'Logo': 'VelocityExpress.jpeg',
      'Name': '',
      'Division': 'Principal',
      'Industry': 'Business Services',
      'Type': 'Growth Equity Raise',
      'Amount': '40,000,000',
      'Year': 2006,
      'Month': 6,
      'Date': 'June 2006'
    },
    {
      'Logo': 'CashEdge.jpeg',
      'Name': '',
      'Division': 'Principal',
      'Industry': 'Transaction Processing',
      'Type': 'Growth Equity Raise',
      'Amount': '32,000,000',
      'Year': 2007,
      'Month': 1,
      'Date': 'January 2007'
    },
    {
      'Logo': 'Currenex.jpeg',
      'Name': '',
      'Division': 'Principal',
      'Industry': 'Capital Markets',
      'Type': 'Sale to State Street',
      'Amount': '564,000,000',
      'Year': 2007,
      'Month': 3,
      'Date': 'March 2007'
    },
    {
      'Logo': 'Ballista.jpeg',
      'Name': '',
      'Division': '',
      'Industry': 'Capital Markets',
      'Type': 'Growth Equity Investment',
      'Amount': '12,000,000',
      'Year': 2009,
      'Month': 6,
      'Date': 'June 2009'
    },
    {
      'Logo': 'Knight.jpeg',
      'Name': '',
      'Division': 'Principal',
      'Industry': 'Capital Markets',
      'Type': 'Strategic Sale to FXCM',
      'Amount': 'Undisclosed',
      'Year': 2009,
      'Month': 6,
      'Date': 'June 2009'
    },
    {
      'Logo': 'logo.jpeg',
      'Name': 'Undisclosed',
      'Division': 'Principal',
      'Industry': 'Financial Technology',
      'Type': 'Growth Equity Investment',
      'Amount': '12,000,000',
      'Year': 2009,
      'Month': 6,
      'Date': 'June 2009'
    },
    {
      'Logo': 'logo.jpeg',
      'Name': 'Mortgage Originator',
      'Division': 'Principal',
      'Industry': 'Specialty Lending',
      'Type': 'Acquisition',
      'Amount': '22,000,000+',
      'Year': 2009,
      'Month': 12,
      'Date': 'December 2009'
    },
    {
      'Logo': 'UrbanFinancial.jpeg',
      'Name': '',
      'Division': '',
      'Industry': 'Mortgage Finance',
      'Type': 'Acquisition',
      'Amount': '25,000,000',
      'Year': 2009,
      'Month': 12,
      'Date': 'December 2009'
    },
    {
      'Logo': 'Pico.jpeg',
      'Name': '',
      'Division': '',
      'Industry': 'Capital Markets',
      'Type': 'Growth Equity Investment',
      'Amount': '6,500,000+',
      'Year': 2010,
      'Month': 3,
      'Date': 'March 2010'
    },
    {
      'Logo': 'AstorInvestment.jpeg',
      'Name': '',
      'Division': '',
      'Industry': 'Asset Management',
      'Type': 'Acquisition',
      'Amount': '20,000,000',
      'Year': 2010,
      'Month': 6,
      'Date': 'June 2010'
    },
    {
      'Logo': 'Equiduct.jpeg',
      'Name': '',
      'Division': '',
      'Industry': 'Capital Markets',
      'Type': 'Growth Equity Investment',
      'Amount': '10,000,000',
      'Year': 2010,
      'Month': 6,
      'Date': 'June 2010'
    },
    {
      'Logo': 'CreditMax.jpeg',
      'Name': '',
      'Division': '',
      'Industry': 'Consumer Finance',
      'Type': 'Debt Raise',
      'Amount': '5,500,000',
      'Year': 2010,
      'Month': 8,
      'Date': 'August 2010'
    },
    {
      'Logo': 'CreditMax.jpeg',
      'Name': '',
      'Division': '',
      'Industry': 'Consumer Finance',
      'Type': 'Growth Equity Investment',
      'Amount': '2,500,000',
      'Year': 2010,
      'Month': 8,
      'Date': 'August 2010'
    },
    {
      'Logo': 'NexisCard.jpeg',
      'Name': '',
      'Division': '',
      'Industry': 'Transaction Processing',
      'Type': 'Equity Raise',
      'Amount': '1,000,000',
      'Year': 2010,
      'Month': 12,
      'Date': 'December 2010'
    },
    {
      'Logo': 'DriveFactor.jpeg',
      'Name': '',
      'Division': 'Advisory',
      'Industry': 'Financial Technology',
      'Type': 'Growth Equity Investment',
      'Amount': '2,500,000',
      'Year': 2011,
      'Month': 6,
      'Date': 'June 2011'
    },
    {
      'Logo': 'canebay.jpeg',
      'Name': '',
      'Division': '',
      'Industry': 'Online Consumer Finance',
      'Type': 'Equity Raise',
      'Amount': '80,000,000',
      'Year': 2011,
      'Month': 12,
      'Date': 'December 2011'
    },
    {
      'Logo': 'canebay.jpeg',
      'Name': '',
      'Division': '',
      'Industry': 'Online Consumer Finance',
      'Type': 'Debt Raise',
      'Amount': '20,000,000',
      'Year': 2011,
      'Month': 12,
      'Date': 'December 2011'
    },
    {
      'Logo': 'BenchSymbol.jpeg',
      'Name': '',
      'Division': '',
      'Industry': 'Business Services',
      'Type': 'Seed Capital Raise',
      'Amount': '2,000,000',
      'Year': 2011,
      'Month': 1,
      'Date': 'December 2010'
    },
    {
      'Logo': 'logo.jpeg',
      'Name': 'Short-Term Online Lender',
      'Division': '',
      'Industry': 'Consumer Finance',
      'Type': 'Debt Raise',
      'Amount': '20,000,000',
      'Year': 2012,
      'Month': 11,
      'Date': 'November 2012'
    },
    {
      'Logo': 'logo.jpeg',
      'Name': 'Short-Term Online Lender',
      'Division': '',
      'Industry': 'Consumer Finance',
      'Type': 'Equity Raise',
      'Amount': '80,000,000',
      'Year': 2012,
      'Month': 11,
      'Date': 'November 2012'
    },
    {
      'Logo': 'logo.jpeg',
      'Name': 'Online Consumer Lender',
      'Division': 'Advisory',
      'Industry': 'Specialty Lending',
      'Type': 'Growth Buyout',
      'Amount': '75,000,000+',
      'Year': 2012,
      'Month': 12,
      'Date': 'December 2012'
    },
    {
      'Logo': 'BenchSymbol.jpeg',
      'Name': '',
      'Division': '',
      'Industry': 'Business Services',
      'Type': 'Series A Capital Raise',
      'Amount': '8,000,000',
      'Year': 2012,
      'Month': 1,
      'Date': 'December 2011'
    },
    {
      'Logo': 'macfarlane.jpeg',
      'Name': '',
      'Division': '',
      'Industry': 'Online Consumer Finance',
      'Type': 'Debt Raise',
      'Amount': '25,000,000',
      'Year': 2014,
      'Month': 8,
      'Date': 'August 2014'
    },
    {
      'Logo': 'logo.jpeg',
      'Name': 'Online Installment Lender',
      'Division': '',
      'Industry': 'Consumer Finance',
      'Type': 'Debt Raise',
      'Amount': '25,000,000',
      'Year': 2014,
      'Month': 8,
      'Date': 'August 2014'
    },
    {
      'Logo': 'Privlo.jpeg',
      'Name': '',
      'Division': '',
      'Industry': 'Mortgage Finance',
      'Type': 'Debt Raise',
      'Amount': '350,000,000',
      'Year': 2014,
      'Month': 8,
      'Date': 'August 2014'
    },
    {
      'Logo': 'FlexShopper.jpeg',
      'Name': '',
      'Division': '',
      'Industry': 'Consumer Finance',
      'Type': 'Debt Raise',
      'Amount': '100,000,000',
      'Year': 2015,
      'Month': 3,
      'Date': 'March 2015'
    },
    {
      'Logo': 'FlexShopper.jpeg',
      'Name': '',
      'Division': '',
      'Industry': 'Consumer Finance',
      'Type': 'Equity Raise',
      'Amount': '9,350,000',
      'Year': 2015,
      'Month': 3,
      'Date': 'March 2015'
    },
    {
      'Logo': 'moneykey.jpeg',
      'Name': '',
      'Division': '',
      'Industry': 'Online Consumer Finance',
      'Type': 'Debt Raise',
      'Amount': '17,500,000',
      'Year': 2015,
      'Month': 3,
      'Date': 'March 2015'
    },
    {
      'Logo': 'logo.jpeg',
      'Name': 'Short-Term Online Lender',
      'Division': '',
      'Industry': 'Consumer Finance',
      'Type': 'Debt Raise',
      'Amount': '17,500,000',
      'Year': 2015,
      'Month': 3,
      'Date': 'March 2015'
    },
    {
      'Logo': 'Photonic.jpeg',
      'Name': '',
      'Division': '',
      'Industry': 'Commercial Finance',
      'Type': 'Equity Raise',
      'Amount': '1,000,000',
      'Year': 2016,
      'Month': 3,
      'Date': 'March 2016'
    },
    {
      'Logo': 'CapFusion.jpeg',
      'Name': '',
      'Division': '',
      'Industry': 'Small Business Lender',
      'Type': 'Debt Raise',
      'Amount': '60,000,000',
      'Year': 2016,
      'Month': 5,
      'Date': 'May 2016'
    },
    {
      'Logo': 'FlexShopper.jpeg',
      'Name': '',
      'Division': '',
      'Industry': 'Consumer Finance',
      'Type': 'Growth Equity Investment',
      'Amount': '22,000,000',
      'Year': 2016,
      'Month': 6,
      'Date': 'June 2016'
    },
    {
      'Logo': 'logo.jpeg',
      'Name': 'Project El Dorado',
      'Division': '',
      'Industry': 'Commercial Finance',
      'Type': 'Capital Raise',
      'Amount': '10,000,000',
      'Year': 2016,
      'Month': 8,
      'Date': 'August 2016'
    },
    {
      'Logo': 'logo.jpeg',
      'Name': 'Project Dynamo',
      'Division': '',
      'Industry': 'Consumer Finance',
      'Type': 'Debt Raise',
      'Amount': '10,000,000',
      'Year': 2016,
      'Month': 9,
      'Date': 'September 2016'
    },
    {
      'Logo': 'logo.jpeg',
      'Name': 'Photonic Capital & Photonic Labratories',
      'Division': '',
      'Industry': 'Commercial Finance',
      'Type': 'Debt Raise',
      'Amount': '100,000,000',
      'Year': 2017,
      'Month': 1,
      'Date': 'January 2017'
    },
    {
      'Logo': 'channel.jpeg',
      'Name': '',
      'Division': '',
      'Industry': 'Small Business Lender',
      'Type': 'Equity Raise',
      'Amount': 'Undisclosed',
      'Year': 2018,
      'Month': 5,
      'Date': 'May 2018'
    },
    {
      'Logo': 'elevate.jpeg',
      'Name': '',
      'Division': '',
      'Industry': 'Business Services',
      'Type': 'Equity Raise',
      'Amount': '25,000,000',
      'Year': 2018,
      'Month': 6,
      'Date': 'June 2018'
    },
    {
      'Logo': 'logo.jpeg',
      'Name': 'MCP-Gold, L.P.',
      'Division': '',
      'Industry': 'Commercial Finance',
      'Type': 'Capital Raise',
      'Amount': '20,000,000',
      'Year': 2018,
      'Month': 6,
      'Date': 'June 2018'
    },

  ]

var news = [
  {
    'cardTitle': 'Middlemarch Capital Partners Closes $17.5M of $20M Gold Financing FundPartner',
    'cardText': 'Investment strategy exploits a global demand for gold and the ability to consistently source gold at advantaged pricing',
    'cardPhoto': 'curved-6.jpeg',
    'postDate': '2010-06-04',
    'postContent': 'blarg',
    'postAuthor': 'Sasha Grutman',
    'postAuthorPhoto': 'team1.jpeg',
    'postLinkUrl': '2017-11-16-LendingReport.pdf'
  },
  {
    'cardTitle': 'Customer Acquisition: The Alternative Lending Report',
    'cardText': 'Alternative Finance: It All Begins with Customer Acquisition',
    'cardPhoto': '2017-11-16-LendingReport.jpeg',
    'postDate': '2010-01-10',
    'postContent': 'blarg',
    'postAuthor': 'Sasha Grutman',
    'postAuthorPhoto': 'team1.jpeg',
    'postLinkUrl': '2017-11-16-LendingReport.pdf'
  },
  {
    'cardTitle': '60 Million Growth Capital Raise for CapFusion Completed',
    'cardText': 'Middlemarch Partners announces its role as a financial and strategic advisor in the completion of an up to $60 million debt facility raise for CapFusion, an online provider of small business loans.',
    'cardPhoto': '2016-06-01-CapFusion.jpeg',
    'postDate': '2016-06-01',
    'postContent': 'blarg',
    'postAuthor': 'Sasha Grutman',
    'postAuthorPhoto': ''
  },
  {
    'cardTitle': 'Photonic Capital Secures $100 Million Dollar Credit Facility',
    'cardText': 'Photonic Capital secures $100 million dollar credit facility to support the expansion of its LED lighting shared savings finance program',
    'cardPhoto': '2017-01-03-Photonic.jpeg',
    'postDate': '2017-01-03',
    'postContent': 'blarg',
    'postAuthor': 'Sasha Grutman',
    'postAuthorPhoto': 'team1.jpeg'
  },
  {
    'cardTitle': 'Middlemarch Capital Partners Closes $17.5M of $20M Gold Financing FundPartner',
    'cardText': 'Finding temporary housing for your dog should be as easy as renting an Airbnb.That’s the idea behind Rover',
    'cardPhoto': 'curved-6.jpeg',
    'postDate': '2010-01-10',
    'postContent': 'blarg',
    'postAuthor': 'Sasha Grutman',
    'postAuthorPhoto': 'team1.jpeg'
  },
  {
    'cardTitle': 'Middlemarch Capital Partners Closes $17.5M of $20M Gold Financing FundPartner',
    'cardText': 'Finding temporary housing for your dog should be as easy as renting an Airbnb.That’s the idea behind Rover',
    'cardPhoto': 'curved-6.jpeg',
    'postDate': '2010-01-10',
    'postContent': 'blarg',
    'postAuthor': 'Sasha Grutman',
    'postAuthorPhoto': 'team1.jpeg'
  }
];

export { team, transactions, news };