import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'




const News = () => {

    const [items, setItems] = useState([]);

    const fetchArticles = () => {
        const mockData =  [
           {
               "title": "Dow tops 44,000 for first time, S&P 500 closes at record high to cap election week rally: Live updates",
               "snippet": "The stock market climbed to another round of records on Friday, as the Dow and S&P 500 wrapped up their best week in a year after Donald Trump's election ...",
               "publisher": "CNBC",
               "timestamp": "1731022080000",
               "newsUrl": "https://www.cnbc.com/2024/11/07/stock-market-today-live-updates.html",
               "images": {
                   "thumbnail": "1.png",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iI0NnNXBVMTl0ZW5CdmQzSkZVbGxzVFJDZkF4ampCU2dLTWdB"
               }
           },
           {
               "title": "Markets just had their best week all year",
               "snippet": "US stocks closed at record highs on Friday, notching their best week all year after Donald Trump's victory in the US presidential election.",
               "publisher": "CNN",
               "timestamp": "1731100020000",
               "newsUrl": "https://www.cnn.com/2024/11/08/investing/us-stocks-best-week-2024/index.html",
               "images": {
                   "thumbnail": "2.png",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iI0NnNTJiMnhvUkZjdFFtcFhNRGhoVFJDZkF4amlCU2dLTWdB"
               }
           },
           {
               "title": "Stock Market Rallies to Its Best Week in Over a Year",
               "snippet": "Stocks rose on Friday, capping the market's best week in over a year and extending a rally that came as President-elect Donald J. Trump's decisive election ...",
               "publisher": "The New York Times",
               "timestamp": "1731100376000",
               "newsUrl": "https://www.nytimes.com/2024/11/08/business/stock-market-trump-fed.html",
               "images": {
                   "thumbnail": "3.png",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNHpjMGx5VTJ4SU9FSkVkV2hVVFJDUkF4ajlCU2dLTWdZQmw0ckNSZ1E"
               }
           },
           {
               "title": "S&P 500 breaks 6,000 level as Trump and Fed-fueled rally advances",
               "snippet": "NEW YORK, Nov 8 (Reuters) - The S&P 500 briefly surpassed the 6,000 mark and closed with its biggest weekly percentage gain in a year, as Donald Trump's ...",
               "publisher": "Reuters",
               "timestamp": "1731110221000",
               "newsUrl": "https://www.reuters.com/markets/us/sp-500-futures-cross-6000-mark-equities-ride-higher-trumps-victory-2024-11-08/",
               "images": {
                   "thumbnail": "4.png",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iI0NnNURVRmhLYlhONE4zRmpaV3d3VFJDcUJCaXFCQ2dLTWdB"
               }
           },
           {
               "title": "S&P 500 Notches Its 50th All-Time High in 2024: Markets Wrap",
               "snippet": "(Bloomberg) -- Stocks rose at the end of their best week in 2024 amid solid consumer sentiment data and bets that newly elected President Donald Trump's ...",
               "publisher": "Yahoo Finance",
               "timestamp": "1731101370000",
               "newsUrl": "https://finance.yahoo.com/news/stocks-bonds-rally-federal-cuts-231405705.html",
               "images": {
                   "thumbnail": "5.png",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNXlXak40V1ZsV1l5MHRjMnBUVFJEb0FoaUFCU2dLTWdZcEJhRE1FUXM"
               }
           },
           {
               "title": "Stock Market News, Nov. 8, 2024: Dow, S&P 500 Finish Their Best Week of 2024",
               "snippet": "Last Updated: Nov. 8, 2024 at 6:23 PM EST. Created with Highcharts 9.0.1 Index performance, so far this week Source: FactSet As of Nov. 8, 10:50 a.m. ET.",
               "publisher": "The Wall Street Journal",
               "timestamp": "1731108180000",
               "newsUrl": "https://www.wsj.com/livecoverage/stock-market-today-dow-sp500-nasdaq-live-11-08-2024",
               "images": {
                   "thumbnail": "6.png",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iMkNnNVBSa0ZhWHpBMFVIZFRaWFpvVFJDZkFSaS1BaWdCTWd1QkJJU0ZpcXFvdGNnZXdR"
               }
           },
           {
               "title": "Trump's Win is Neither an Oil Gusher nor a Green Crusher: Election 2024",
               "snippet": "Presidents rarely remake the energy sector, which is beholden to the more powerful currents of price and profit.",
               "publisher": "Bloomberg",
               "timestamp": "1730914650000",
               "newsUrl": "https://www.bloomberg.com/opinion/articles/2024-11-06/trump-s-win-is-neither-an-oil-gusher-nor-a-green-crusher-election-2024",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNWpXbEUyZFVwVFEyOXdkRGhPVFJERUF4aW1CU2dLTWdZSk00WUlzZ1U=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNWpXbEUyZFVwVFEyOXdkRGhPVFJERUF4aW1CU2dLTWdZSk00WUlzZ1U"
               }
           },
           {
               "title": "Trump's Win is Neither an Oil Gusher nor a Green Crusher: Election 2024",
               "snippet": "Presidents rarely remake the energy sector, which is beholden to the more powerful currents of price and profit.",
               "publisher": "Bloomberg",
               "timestamp": "1730914650000",
               "newsUrl": "https://www.bloomberg.com/opinion/articles/2024-11-06/trump-s-win-is-neither-an-oil-gusher-nor-a-green-crusher-election-2024",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNWpXbEUyZFVwVFEyOXdkRGhPVFJERUF4aW1CU2dLTWdZSk00WUlzZ1U=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNWpXbEUyZFVwVFEyOXdkRGhPVFJERUF4aW1CU2dLTWdZSk00WUlzZ1U"
               }
           },
           {
               "title": "Trump's Win is Neither an Oil Gusher nor a Green Crusher: Election 2024",
               "snippet": "Presidents rarely remake the energy sector, which is beholden to the more powerful currents of price and profit.",
               "publisher": "Bloomberg",
               "timestamp": "1730914650000",
               "newsUrl": "https://www.bloomberg.com/opinion/articles/2024-11-06/trump-s-win-is-neither-an-oil-gusher-nor-a-green-crusher-election-2024",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNWpXbEUyZFVwVFEyOXdkRGhPVFJERUF4aW1CU2dLTWdZSk00WUlzZ1U=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNWpXbEUyZFVwVFEyOXdkRGhPVFJERUF4aW1CU2dLTWdZSk00WUlzZ1U"
               }
           },
           {
               "title": "What a Trump presidency means for oil and gas markets",
               "snippet": "Energy markets are trying to digest what another Trump term could bring for oil and gas prices.",
               "publisher": "ING Think",
               "timestamp": "1731060281000",
               "newsUrl": "https://think.ing.com/articles/what-a-trump-presidency-means-for-oil-and-gas-markets/",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iJ0NnNXZaM05wT1Y4NWJtMVhVRzR0VFJDb0FSaXNBaWdCTWdPQk5BWQ=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iJ0NnNXZaM05wT1Y4NWJtMVhVRzR0VFJDb0FSaXNBaWdCTWdPQk5BWQ"
               }
           },
           {
               "title": "Trump’s Energy Policies May Be a Mixed Bag for Oil Companies",
               "snippet": "President-elect Donald J. Trump and oil and gas executives have championed each other. But his victory may prove to be a mixed blessing for the industry.",
               "publisher": "The New York Times",
               "timestamp": "1730994715000",
               "newsUrl": "https://www.nytimes.com/2024/11/07/business/energy-environment/trump-oil-gas.html",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iJ0NnNVdSMlV4VGpCNFV6SmFWakZzVFJDUUF4allCQ2dLTWdNQmtBUQ=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iJ0NnNVdSMlV4VGpCNFV6SmFWakZzVFJDUUF4allCQ2dLTWdNQmtBUQ"
               }
           },
           {
               "title": "Trump Wins Here Are the Implications for the Energy Sector",
               "snippet": "Following the Republican surprise election sweep, we decided to ask the Question Man what the consequences are for energy sector.",
               "publisher": "OilPrice.com",
               "timestamp": "1731114000000",
               "newsUrl": "https://oilprice.com/Energy/Energy-General/Trump-Wins-Here-Are-the-Implications-for-the-Energy-Sector.html",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNWpRbmQ0TVcxRFYzbFFlbTl2VFJEZ0F4aUFCU2dLTWdtQllvZ3lvV2lETkFF=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iL0NnNWpRbmQ0TVcxRFYzbFFlbTl2VFJEZ0F4aUFCU2dLTWdtQllvZ3lvV2lETkFF"
               },
           } ,
               {
                   "title": "How Trump’s Victory Will Impact The Energy Sector",
                   "snippet": "Following Trump's 2024 election win, the U.S. energy sector surged, fueled by his pledge to boost oil and gas production.",
                   "publisher": "Forbes",
                   "timestamp": "1730929059000",
                   "newsUrl": "https://www.forbes.com/sites/rrapier/2024/11/06/how-trumps-victory-will-impact-the-energy-sector/",
                   "images": {
                       "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNXNURGh5WlVJMWIzQmxSVVpVVFJERUF4aW1CU2dLTWdtQkVKN3BHU29taUFJ=-w280-h168-p-df-rw",
                       "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iL0NnNXNURGh5WlVJMWIzQmxSVVpVVFJERUF4aW1CU2dLTWdtQkVKN3BHU29taUFJ"
                   }
               },
               {
                   "title": "Is ExxonMobil Stock A Buy After Trump Win?",
                   "snippet": "ExxonMobil (XOM) is recovering from a recent drop. Is now the time to buy Exxon stock? Energy stocks including oil drillers, natural gas and oil services ...",
                   "publisher": "Investor's Business Daily",
                   "timestamp": "1731077280000",
                   "newsUrl": "https://investors.com/research/exxonmobil-xom-stock-oil-stocks/",
                   "images": {
                       "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNWhRVkZ5TVhaQmVVdzNiV1JYVFJDTUF4aUhCaWdLTWdrQllJZ0RvLWtzTWdF=-w280-h168-p-df-rw",
                       "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iL0NnNWhRVkZ5TVhaQmVVdzNiV1JYVFJDTUF4aUhCaWdLTWdrQllJZ0RvLWtzTWdF"
                   }
               }
               
           ,
           {
               "title": "Investors eye limits to Trump-win market rally",
               "snippet": "The full reality of what a second Trump term means for businesses and the economy is still settling in. Why it matters: The kind of ebullience that ...",
               "publisher": "Axios",
               "timestamp": "1731110398000",
               "newsUrl": "https://www.axios.com/2024/11/08/stocks-market-trump-election-rally-investors",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iMkNnNHlTMjVtTlZvMlRIRktSWGRXVFJDZkF4ampCU2dLTWdzTklZYTNrR285OUZndVBR=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iMkNnNHlTMjVtTlZvMlRIRktSWGRXVFJDZkF4ampCU2dLTWdzTklZYTNrR285OUZndVBR"
               },
           } ,
                {
                       "title": "A New Trump Administration Is No Reason to Change Investing Plans",
                       "snippet": "Big changes are coming in the next Trump administration. But your investing plans needn't change, our columnist says.",
                       "publisher": "The New York Times",
                       "timestamp": "1731060203000",
                       "newsUrl": "https://www.nytimes.com/2024/11/08/business/stock-market-bonds-election-investing.html",
                       "images": {
                           "thumbnail": "https://news.google.com/api/attachments/CC8iI0NnNWZjbkJzVmt0WE1FVjVZM05tVFJETEJCaUxCQ2dLTWdB=-w280-h168-p-df-rw",
                           "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iI0NnNWZjbkJzVmt0WE1FVjVZM05tVFJETEJCaUxCQ2dLTWdB"
                       }
                   },
                   {
                       "title": "Stocks soared on news of Trump's election. Bonds sank. Here's why.",
                       "snippet": "Stocks and bonds went in different directions as Donald Trump emerged victorious in the 2024 election.",
                       "publisher": "USA TODAY",
                       "timestamp": "1731147116000",
                       "newsUrl": "https://www.usatoday.com/story/money/2024/11/09/trump-win-bond-market/76137769007/",
                       "images": {
                           "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNUNWV2hEVjFGaE5FTmxlRXBTVFJEekFoaVVCU2dLTWdZQlVKWXBKQWs=-w280-h168-p-df-rw",
                           "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNUNWV2hEVjFGaE5FTmxlRXBTVFJEekFoaVVCU2dLTWdZQlVKWXBKQWs"
                       }
                   },
                   {
                       "title": "These are the most overbought stocks after Trump’s win this week",
                       "snippet": "Amid a sense of renewed market enthusiasm, shares of some companies that have raced ahead this month could be due for a pullback by one popular yardstick.",
                       "publisher": "CNBC",
                       "timestamp": "1731100618000",
                       "newsUrl": "https://www.cnbc.com/2024/11/08/these-are-the-most-overbought-stocks-after-trumps-win-this-week.html",
                       "images": {
                           "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNVVRbEpYWlhoME5rSmpORVl5VFJERUF4aW1CU2dLTWdZWmRJekxzUVU=-w280-h168-p-df-rw",
                           "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNVVRbEpYWlhoME5rSmpORVl5VFJERUF4aW1CU2dLTWdZWmRJekxzUVU"
                       }
                   },
                   {
                       "title": "Wall Street cheers Trump's return, with some trepidation",
                       "snippet": "NEW YORK, Nov 7 (Reuters) - Wall Street executives cheered the prospect of business-friendly regulations and a burst of deals as they analyzed the ...",
                       "publisher": "Reuters",
                       "timestamp": "1731006620000",
                       "newsUrl": "https://www.reuters.com/markets/us/wall-street-greets-trumps-return-with-greed-trepidation-2024-11-07/",
                       "images": {
                           "thumbnail": "https://news.google.com/api/attachments/CC8iI0NnNTVSbnBzTVRKQ2JYaFdRMHAyVFJESUF4aWhCU2dLTWdB=-w280-h168-p-df-rw",
                           "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iI0NnNTVSbnBzTVRKQ2JYaFdRMHAyVFJESUF4aWhCU2dLTWdB"
                       }
                   },
                   {
                       "title": "It’s Trump’s Stock Market Now. How to Play It.",
                       "snippet": "The president-elect's policies are likely to have a different impact than they did the first time around, even though the policies themselves aren't all ...",
                       "publisher": "Barron's",
                       "timestamp": "1731084900000",
                       "newsUrl": "https://www.barrons.com/articles/trump-stock-market-77c1c097",
                       "images": {
                           "thumbnail": "https://news.google.com/api/attachments/CC8iI0NnNXplRFYwTmpKWWFXcHVTVEJhVFJDcUJCaXFCQ2dLTWdB=-w280-h168-p-df-rw",
                           "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iI0NnNXplRFYwTmpKWWFXcHVTVEJhVFJDcUJCaXFCQ2dLTWdB"
                       }
                   } ,
               
       
           {
               "title": "Newspaper headlines: US economy 'overheating' and 'Ukraine fears'",
               "snippet": "The implications of Donald Trump's election win make the lead on some of Saturday's front pages.",
               "publisher": "BBC.com",
               "timestamp": "1731132034000",
               "newsUrl": "https://www.bbc.com/news/articles/c4gxz6kx6v7o",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNUVZamsyWkVaamFDMWFOMWxrVFJDZEFoaXhBU2dCTWdZRkFZenJqUWs=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNUVZamsyWkVaamFDMWFOMWxrVFJDZEFoaXhBU2dCTWdZRkFZenJqUWs"
               },

           } ,
              
           {
               "title": "What a Second Trump Term Could Mean for Your Money",
               "snippet": "Here's what the president-elect has said he might do with your taxes, student loans, Social Security and more.",
               "publisher": "The New York Times",
               "timestamp": "1731060237000",
               "newsUrl": "https://www.nytimes.com/2024/11/08/business/trump-taxes-medicare-student-loans.html",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iI0NnNWtkMmhzVnpCbFFYcDViV0l0VFJDbUJSakVBeWdLTWdB=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iI0NnNWtkMmhzVnpCbFFYcDViV0l0VFJDbUJSakVBeWdLTWdB"
               }
           },
           {
               "title": "Charting the Global Economy: Trump Win Reverberates Around the World",
               "snippet": "Donald Trump's decisive win of the US presidential election has world leaders already preparing for how his next administration will shape the global ...",
               "publisher": "Bloomberg",
               "timestamp": "1731146400000",
               "newsUrl": "https://www.bloomberg.com/news/articles/2024-11-09/world-economy-latest-trump-win-reverberates-from-uk-to-china",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iI0NnNWtWMlJGYm1aMFVYQmlNWFZHVFJERUF4aW1CU2dLTWdB=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iI0NnNWtWMlJGYm1aMFVYQmlNWFZHVFJERUF4aW1CU2dLTWdB"
               }
           },
           {
               "title": "Trump’s Economic Plan Is Already Working—Just Not How His Fans Thought",
               "snippet": "Donald Trump promised to make things cheaper for Americans. Things are already getting more expensive.",
               "publisher": "The New Republic",
               "timestamp": "1731079343000",
               "newsUrl": "https://newrepublic.com/post/188195/donald-trump-economic-plan-working-costs",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNWFlRXN5UnprdE9HNDJObEZIVFJDM0FSaVRBaWdCTWdhcFZaYk5KUWc=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNWFlRXN5UnprdE9HNDJObEZIVFJDM0FSaVRBaWdCTWdhcFZaYk5KUWc"
               }
           },
           {
               "title": "Welcome to Trump's economy",
               "snippet": "A look at what Trump's election win is already doing to the markets — and what will happen next.",
               "publisher": "Quartzy",
               "timestamp": "1731150000000",
               "newsUrl": "https://qz.com/emails/quartz-weekend-brief/1851692892/donald-trump-economy-tariffs-trade-taxes-inflation",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNXVjbkJPVFhsNE1USjBOR3RKVFJDdUF4aUZCU2dLTWdZdEZhQ3VFUXM=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNXVjbkJPVFhsNE1USjBOR3RKVFJDdUF4aUZCU2dLTWdZdEZhQ3VFUXM"
               }
           } ,
           {
               "title": "Fed chair says Trump can't remove him. Could Trump still influence interest rates?",
               "snippet": "Federal Reserve Chair Jerome Powell struck a defiant tone this week when posed with the question of whether he would resign from his position if asked by ...",
               "publisher": "ABC News",
               "timestamp": "1731093246000",
               "newsUrl": "https://abcnews.go.com/Business/fed-chair-trump-remove-trump-influence-interest-rates/story?id=115636961",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iI0NnNTJaVkkwVUVSUVV6bGZjMEU0VFJDZkF4ampCU2dLTWdB=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iI0NnNTJaVkkwVUVSUVV6bGZjMEU0VFJDZkF4ampCU2dLTWdB"
               },

           } ,
           {
               "title": "Powell to Trump: Go ahead, make my day",
               "snippet": "Imagine you're at a job you love but you have a boss you just really don't get along with. You stick it out, though, because, after all, it's your dream job ...",
               "publisher": "CNN",
               "timestamp": "1731104040000",
               "newsUrl": "https://www.cnn.com/2024/11/08/economy/powell-trump-fed-tension/index.html",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNWpiREkzYWpGSllraGpWMGhFVFJERUF4aW1CU2dLTWdhVkpaQUtsZ28=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNWpiREkzYWpGSllraGpWMGhFVFJERUF4aW1CU2dLTWdhVkpaQUtsZ28"
               }
           },

           {
               "title": "Powell says he would not resign as Fed chief if Trump asked for his resignation",
               "snippet": "When asked whether he would resign if asked by Trump, the Fed chair simply said: \"No.\"",
               "publisher": "CNBC",
               "timestamp": "1731009693000",
               "newsUrl": "https://www.cnbc.com/2024/11/07/powell-trump.html",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNDFNVEJKUjNvMFVtbFZNVnBIVFJDZkF4ampCU2dLTWdraE01SXlzZWFLaGdJ=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iL0NnNDFNVEJKUjNvMFVtbFZNVnBIVFJDZkF4ampCU2dLTWdraE01SXlzZWFLaGdJ"
               }
           },

           {
               "title": "Trump Is Coming for Jerome Powell. What It Means for Interest Rates, and 5 Other Things to Know Today.",
               "snippet": "China stocks slump on fresh stimulus announcement, Airbnb and Expedia see higher travel demand, and more news to start your day.",
               "publisher": "Barron's",
               "timestamp": "1731067080000",
               "newsUrl": "https://www.barrons.com/articles/trump-powell-fed-what-to-know-today-0ad22a04",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNDVhbVpCUkZsRFZsTjRSRGgyVFJDcUJCaXFCQ2dLTWdZWk1veE5vUVk=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNDVhbVpCUkZsRFZsTjRSRGgyVFJDcUJCaXFCQ2dLTWdZWk1veE5vUVk"
               }
           },

           {
               "title": "Fed chair says he can not legally be removed by Donald Trump",
               "snippet": "Federal Reserve chair Jerome Powell addressed concerns on whether President-elect Donald Trump could demote him.",
               "publisher": "USA TODAY",
               "timestamp": "1731015902000",
               "newsUrl": "https://www.usatoday.com/videos/news/politics/2024/11/07/fed-chair-says-he-can-not-legally-be-removed-by-donald-trump/76118113007/",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNUhSbUpwTVV4Rk9ERmlkV1pDVFJDZkF4ampCU2dLTWdZdE5vRE5IUWs=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNUhSbUpwTVV4Rk9ERmlkV1pDVFJDZkF4ampCU2dLTWdZdE5vRE5IUWs"
               }
           },

           {
               "title": "Why Trump and Powell could clash over the Fed's future",
               "snippet": "The votes aren't all counted yet, but the early jockeying for position on the Fed's future has begun. Why it matters: Fed chair Jerome Powell said bluntly ...",
               "publisher": "Axios",
               "timestamp": "1731086394000",
               "newsUrl": "https://www.axios.com/2024/11/08/trump-powell-fed-future-independence",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iI0NnNTJSR3N4ZFZjeVdteGlPWGR3VFJDZkF4ampCU2dLTWdB=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iI0NnNTJSR3N4ZFZjeVdteGlPWGR3VFJDZkF4ampCU2dLTWdB"
               }
           },

           {
               "title": "How Trump could influence the makeup of the Fed",
               "snippet": "Nov 7 (Reuters) - Federal Reserve Chair Jerome Powell on Thursday said he would not resign if asked to do so by President-elect Donald Trump, ...",
               "publisher": "Reuters.com",
               "timestamp": "1731019691000",
               "newsUrl": "https://www.reuters.com/world/us/how-trump-could-influence-makeup-fed-2024-11-07/",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNU1kbkpZWVdKTFdUTjVaVlpNVFJERUF4aW1CU2dLTWdZeFJKeVBJUWs=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNU1kbkpZWVdKTFdUTjVaVlpNVFJERUF4aW1CU2dLTWdZeFJKeVBJUWs"
               }
           } ,
           {
               "title": "Toyota Calls California EV Rules 'Impossible'",
               "snippet": "The California Air Resources Board's regulations require 35% of new vehicle sales to be zero emissions from model year 2026 onwards. Toyota has a problem ...",
               "publisher": "InsideEVs ",
               "timestamp": "1731103740000",
               "newsUrl": "https://insideevs.com/news/740400/toyota-calls-california-ev-rules-impossible/",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNXNWWHBpWDJKd1gwZHNTSFp1VFJDb0FSaXNBaWdCTWdZQlFKQXBwUVk=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNXNWWHBpWDJKd1gwZHNTSFp1VFJDb0FSaXNBaWdCTWdZQlFKQXBwUVk"
               },
               "hasSubnews": false
           },
           {
               "title": "Trump promises he won't sell Truth Social shares, calls for investigation into rumors",
               "snippet": "Trump's Friday post sent shares soaring and ballooned his personal stake in the group to over $3.5 billion.",
               "publisher": "Salon",
               "timestamp": "1731109800000",
               "newsUrl": "https://www.salon.com/2024/11/08/promises-he-wont-sell-truth-social-shares-calls-for-investigation-into-rumors/",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNDBUR2haWm13eVRrTXpZblpRVFJESEF4aWlCU2dLTWdhdEk1cXVsUW8=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNDBUR2haWm13eVRrTXpZblpRVFJESEF4aWlCU2dLTWdhdEk1cXVsUW8"
               },
               "hasSubnews": false
           },
           {
               "title": "Elon Musk snapped in SpaceX shoes as he heads to Mar-a-Lago",
               "snippet": "Billionaire Elon Musk was spotted sporting some unique footwear Friday as he stepped off a plane in Palm Beach, Fla., enroute to President-elect Donald ...",
               "publisher": "New York Post ",
               "timestamp": "1731108480000",
               "newsUrl": "https://nypost.com/2024/11/08/us-news/elon-musk-snapped-in-spacex-shoes-as-he-heads-to-mar-a-lago/",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iI0NnNXFOa05mTFd0YWVsQlllRXRXVFJERUF4aW1CU2dLTWdB=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iI0NnNXFOa05mTFd0YWVsQlllRXRXVFJERUF4aW1CU2dLTWdB"
               },
               "hasSubnews": false
           },
           {
               "title": "Mega Millions winning numbers for November 8 drawing: Jackpot rises to $334 million",
               "snippet": "Mega Millions players, are you feeling lucky? The winning numbers are in for the Nov. 8 drawing! Here are the results.",
               "publisher": "USA TODAY",
               "timestamp": "1731117729000",
               "newsUrl": "https://www.usatoday.com/story/money/lottery/2024/11/08/mega-millions-winning-numbers/76136983007/",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNHdTRXBXWlZsaFlWVjNiRkp0VFJEekFoaVVCU2dLTWdhbFFvYk9IUW8=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNHdTRXBXWlZsaFlWVjNiRkp0VFJEekFoaVVCU2dLTWdhbFFvYk9IUW8"
               },
               "hasSubnews": false
           },
           {
               "title": "Fed Cuts Rates Again",
               "snippet": "The Federal Reserve cut interest rates by a quarter point, the second reduction this year. A combination of strong data and Donald Trump's return to the ...",
               "publisher": "The New York Times",
               "timestamp": "1731070920000",
               "newsUrl": "https://www.nytimes.com/live/2024/11/07/business/fed-interest-rates",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iI0NnNVRPR3hhYTFaaWFta3liazh3VFJDSUJCak9CQ2dLTWdB=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iI0NnNVRPR3hhYTFaaWFta3liazh3VFJDSUJCak9CQ2dLTWdB"
               },
               "hasSubnews": false
           },
           {
               "title": "AI Startups, Investors Eagerly Await Less ‘Red Tape’ Under Trump",
               "snippet": "Leading AI startup founders and venture capitalists hope that a new Trump presidency will spur more acquisitions amid a laxer but not nonexistent regulatory ...",
               "publisher": "Forbes",
               "timestamp": "1731065400000",
               "newsUrl": "https://www.forbes.com/sites/sarahemerson/2024/11/08/ai-startups-investors-eagerly-await-less-red-tape-under-trump/",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNDFSblZRY2xVNWRHeFdVM2Q2VFJERUF4aW1CU2dLTWdhcGxJN050UVk=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNDFSblZRY2xVNWRHeFdVM2Q2VFJERUF4aW1CU2dLTWdhcGxJN050UVk"
               },
               "hasSubnews": false
           },
           {
               "title": "Bitcoin Hits Another Milestone, Topping $77K for First Time; Funding Rates Suggest Crypto Rally Can Keep Going",
               "snippet": "Cardano's ADA, Polygon's POL advanced 15% as the broad-market CoinDesk 20 Index outperformed BTC.",
               "publisher": "CoinDesk",
               "timestamp": "1731099600000",
               "newsUrl": "https://www.coindesk.com/markets/2024/11/08/bitcoin-hits-another-milestone-topping-77k-for-first-time-funding-rates-suggest-crypto-rally-can-keep-going/",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNWhZbWhmYzNwVE9WbE9iRVJpVFJDUUF4ai1CU2dLTWdtQkVJeDVCR3pReEFJ=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iL0NnNWhZbWhmYzNwVE9WbE9iRVJpVFJDUUF4ai1CU2dLTWdtQkVJeDVCR3pReEFJ"
               },
               "hasSubnews": false
           },
           {
               "title": "Is Super Micro Computer Stock a Buy? 3 Things to Watch.",
               "snippet": "With shares down by 78% from an all-time high reached in March, Super Micro Computer (NASDAQ: SMCI) might be one of the first dominoes to fall as the ...",
               "publisher": "Yahoo Finance",
               "timestamp": "1731105300000",
               "newsUrl": "https://finance.yahoo.com/news/super-micro-computer-stock-buy-223500636.html",
               "hasSubnews": false
           },
           {
               "title": "China unveils $1.4 trillion stimulus in effort to boost flailing economy",
               "snippet": "The outlook is grim for the world's second largest economy, with growth slowing and the prospect of a new trade war following Donald Trump's electoral ...",
               "publisher": "The Washington Post",
               "timestamp": "1731098765000",
               "newsUrl": "https://www.washingtonpost.com/world/2024/11/08/china-economy-stimulus-package/",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNWFabnBOYjFKcVNrTk1WelJKVFJERUF4aW1CU2dLTWdhTlZZN01wUWM=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNWFabnBOYjFKcVNrTk1WelJKVFJERUF4aW1CU2dLTWdhTlZZN01wUWM"
               },
               "hasSubnews": false
           },
           {
               "title": "The FDA Is Finally Pulling a Useless Cold Medicine From the Market",
               "snippet": "Phenylephrine is both the most common decongestant on pharmacy shelves, and arguably the worst at its job. Last year, the FDA's advisory panel ruled it ...",
               "publisher": "Lifehacker",
               "timestamp": "1731105000000",
               "newsUrl": "https://lifehacker.com/fda-pulling-phenylephrine-from-the-market",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNHphMGhmUkRkbFgzQTBaM2RsVFJDZkF4ampCU2dLTWdrQkVJSm9yU1pjdEFB=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iL0NnNHphMGhmUkRkbFgzQTBaM2RsVFJDZkF4ampCU2dLTWdrQkVJSm9yU1pjdEFB"
               },
               "hasSubnews": false
           },
           {
               "title": "For What Comes Next in Markets, Look Back to 2016",
               "snippet": "Selecting which Trump trades turn into Trump investments is just as difficult this time around as it was in his first term. The right bets might seem ...",
               "publisher": "The Wall Street Journal",
               "timestamp": "1731128460000",
               "newsUrl": "https://www.wsj.com/finance/investing/trump-election-trade-markets-a29100cc",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNUZPVk5xYTNrdFZUWnpOVEJJVFJERkF4aWxCU2dLTWdZQlFwQ3NIUWM=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNUZPVk5xYTNrdFZUWnpOVEJJVFJERkF4aWxCU2dLTWdZQlFwQ3NIUWM"
               },
               "hasSubnews": false
           },
           {
               "title": "Trump’s Tariffs: Steve Madden, Under Armour and More Are Responding",
               "snippet": "The U.S. presidential election made its way into several remarks in footwear earnings calls this week. Overall, executives discussed how Donald Trump's win ...",
               "publisher": "Footwear News",
               "timestamp": "1731095132000",
               "newsUrl": "https://footwearnews.com/business/business-news/execs-under-armour-wolverine-steve-madden-tapestry-trump-tariffs-1234729208/",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iI0NnNWpWRXRXWVhkUVJFSktkbWxCVFJDMUF4aThCU2dLTWdB=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iI0NnNWpWRXRXWVhkUVJFSktkbWxCVFJDMUF4aThCU2dLTWdB"
               },
               "hasSubnews": false
           },
           {
               "title": "Pinterest stock plunges following weak Q4 revenue guidance",
               "snippet": "Pinterest reported third-quarter earnings on Thursday that beat on the top and bottom lines.",
               "publisher": "CNBC",
               "timestamp": "1731014275000",
               "newsUrl": "https://www.cnbc.com/2024/11/07/pinterest-pins-q3-earnings-report-2024.html",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNU1SSHAyWkc4emFGWnJWVm8zVFJDZkF4ampCU2dLTWdtSlVJU0ZvU2sxU2dJ=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iL0NnNU1SSHAyWkc4emFGWnJWVm8zVFJDZkF4ampCU2dLTWdtSlVJU0ZvU2sxU2dJ"
               },
               "hasSubnews": false
           },
           {
               "title": "9 Stocks To Watch As Bank Stocks Blow Past Tech Names In 2024: Thank The 'Trump Trade'",
               "snippet": "Financial stocks have surged ahead of tech in year-to-date performance, fueled by a Trump-led rally on Wednesday that lifted banks and brokers amid investor ...",
               "publisher": "Benzinga",
               "timestamp": "1731007814000",
               "newsUrl": "https://www.benzinga.com/analyst-ratings/analyst-color/24/11/41820744/9-stocks-to-watch-financial-sector-outshines-tech-in-2024-as-trump-trade-sparks-m-a",
               "hasSubnews": false
           },
           {
               "title": "Trump’s win brings good news for savers",
               "snippet": "The U.S. election results are producing opportunities for retirees and other savers — as long as they have some money set aside.",
               "publisher": "Yahoo Finance",
               "timestamp": "1731001440000",
               "newsUrl": "https://finance.yahoo.com/news/trump-win-brings-good-news-174400141.html",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNXBkbUp6YTJGbVFtVmZWemRWVFJDckF4aUFCU2dLTWdhQk1KSmxNUWc=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNXBkbUp6YTJGbVFtVmZWemRWVFJDckF4aUFCU2dLTWdhQk1KSmxNUWc"
               },
               "hasSubnews": false
           },
           {
               "title": "American Airlines loses appeal of ruling barring JetBlue alliance",
               "snippet": "The 1st U.S. Circuit Court of Appeals agreed with the lower-court judge that the airlines' Northeast Alliance joint venture violated federal antitrust law.",
               "publisher": "CNBC",
               "timestamp": "1731092962000",
               "newsUrl": "https://www.cnbc.com/2024/11/08/american-airlines-loses-us-appeal-of-ruling-barring-jetblue-alliance.html",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNVRNRk42YTFGS1FVMUpaa3hGVFJDZkF4ampCU2dLTWdhQjBZNUlSUVU=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNVRNRk42YTFGS1FVMUpaa3hGVFJDZkF4ampCU2dLTWdhQjBZNUlSUVU"
               },
               "hasSubnews": false
           },
           {
               "title": "Wall Street giddy as Trump White House expected to OK fresh wave of mergers and acquisitions",
               "snippet": "Wall Street is salivating as President-elect Donald Trump is expected to usher in a new era of increased dealmaking during his second term — including a ...",
               "publisher": "New York Post ",
               "timestamp": "1731088140000",
               "newsUrl": "https://nypost.com/2024/11/08/business/wall-street-giddy-as-trump-administration-expected-to-okay-wave-of-mergers-and-acquisitions/",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iMkNnNDBhelJmVVRORFZXWXRZbFJtVFJERUF4aW5CU2dLTWd1Uk1JckdHaW9tcG9wTFBR=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iMkNnNDBhelJmVVRORFZXWXRZbFJtVFJERUF4aW5CU2dLTWd1Uk1JckdHaW9tcG9wTFBR"
               },
               "hasSubnews": false
           },
           {
               "title": "House Committee Targets Chip Technology Firms for China Ties",
               "snippet": "It requested information from a handful of firms that make chip manufacturing possible about their commercial ties to China.",
               "publisher": "The New York Times",
               "timestamp": "1731086647000",
               "newsUrl": "https://www.nytimes.com/2024/11/08/business/economy/house-committee-china-semiconductor-manufacturing.html",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNVNOekJMVWxkUlYycFJaV3cyVFJDUUF4allCQ2dLTWdhQk00Nk9wUVk=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNVNOekJMVWxkUlYycFJaV3cyVFJDUUF4allCQ2dLTWdhQk00Nk9wUVk"
               },
               "hasSubnews": false
           },
           {
               "title": "Silicon Valley protested Trump in 2016. Now it wants to work with him.",
               "snippet": "Tech executives were upbeat about Donald Trump's win this week, after an industrywide shift toward more pragmatic politics.",
               "publisher": "The Washington Post",
               "timestamp": "1731123480000",
               "newsUrl": "https://www.washingtonpost.com/technology/2024/11/08/silicon-valley-trump-win-tech/",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iI0NnNU1ZVmQwZERodGJXNUNVRlZ3VFJERUF4aW1CU2dLTWdB=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iI0NnNU1ZVmQwZERodGJXNUNVRlZ3VFJERUF4aW1CU2dLTWdB"
               },
               "hasSubnews": false
           },
           {
               "title": "What will happen to the U.S. dollar, deficit and debt under Trump? Watch gold.",
               "snippet": "Gold's performance may offer hints on what will happen to the U.S. dollar, and how the U.S. deficit and debt story will play out, as incoming U.S. President ...",
               "publisher": "MarketWatch",
               "timestamp": "1731067200000",
               "newsUrl": "https://www.marketwatch.com/story/what-will-happen-to-the-u-s-dollar-deficit-and-debt-under-trump-watch-gold-dc562639",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNDNiVGh3VERsWU9GOVBiblpXVFJDcUJCaXFCQ2dLTWdZNWM1UXpMUWM=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNDNiVGh3VERsWU9GOVBiblpXVFJDcUJCaXFCQ2dLTWdZNWM1UXpMUWM"
               },
               "hasSubnews": false
           },
           {
               "title": "Here’s the official 40-page Walmart Black Friday ad – deals start Nov. 11: Apple gear, smart TVs, more",
               "snippet": "Walmart has just released its highly anticipated 2024 Black Friday ad, offering a whopping 40 pages of incredible deals going live between November 11 and ...",
               "publisher": "9to5Toys",
               "timestamp": "1731012784000",
               "newsUrl": "https://9to5toys.com/2024/11/07/walmart-2024-black-friday-ad/",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iI0NnNWtjbTQwTUhKS04yTXRNVTlmVFJDSEF4aVBCaWdLTWdB=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iI0NnNWtjbTQwTUhKS04yTXRNVTlmVFJDSEF4aVBCaWdLTWdB"
               },
               "hasSubnews": false
           },
           {
               "title": "Nissan shares tumble after cutting 9,000 jobs and halving CEO pay",
               "snippet": "Nissan Motor Co.'s struggles to cope with tougher car industry conditions and address internal weaknesses have spiraled, leaving the automaker no choice but ...",
               "publisher": "Detroit News",
               "timestamp": "1731075839000",
               "newsUrl": "https://www.detroitnews.com/story/business/autos/foreign/2024/11/08/nissan-shares-tumble-after-cutting-9000-jobs-and-halving-ceo-pay/76126968007/",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iMkNnNVJiV1F3V0hsTmMwMWZiMjQzVFJDNUF4aVVCU2dLTWdzSklJQXFtU05xUFhpTmtn=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iMkNnNVJiV1F3V0hsTmMwMWZiMjQzVFJDNUF4aVVCU2dLTWdzSklJQXFtU05xUFhpTmtn"
               },
               "hasSubnews": false
           },
           {
               "title": "'Everything on sale': American Freight closing all stores amid parent company's bankruptcy",
               "snippet": "Furniture store American Freight is set to close all of its 328 locations in dozens of states as a part of Chapter 11 bankruptcy proceedings by its parent ...",
               "publisher": "USA TODAY",
               "timestamp": "1731140399000",
               "newsUrl": "https://www.usatoday.com/story/money/retail/2024/11/07/american-freight-closing-stores-bankruptcy/76118622007/",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNDJUbFpZTXpGb2EwdFFURTl1VFJEekFoaVVCU2dLTWdhVmw0UXBNZ1U=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNDJUbFpZTXpGb2EwdFFURTl1VFJEekFoaVVCU2dLTWdhVmw0UXBNZ1U"
               },
               "hasSubnews": false
           },
           {
               "title": "TSMC will reportedly stop making advanced AI chips for Chinese companies",
               "snippet": "Taiwan Semiconductor Manufacturing Company (TSMC) has suspended the production of advanced AI chips for Chinese companies, according to the Financial Times.",
               "publisher": "Engadget",
               "timestamp": "1731076229000",
               "newsUrl": "https://www.engadget.com/general/tsmc-will-reportedly-stop-making-advanced-ai-chips-for-chinese-companies-143029506.html",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iI0NnNU5UamRUVkc5emJtRndaME5NVFJDckF4aUFCU2dLTWdB=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iI0NnNU5UamRUVkc5emJtRndaME5NVFJDckF4aUFCU2dLTWdB"
               },
               "hasSubnews": false
           },
           {
               "title": "Why Upstart Rocketed Almost 50% Today",
               "snippet": "Upstart's earnings show the company is firmly back in growth mode.",
               "publisher": "The Motley Fool",
               "timestamp": "1731087768000",
               "newsUrl": "https://www.fool.com/investing/2024/11/08/why-upstart-rocketed-almost-50-today/",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNUNVazVoVG5KNlJuQm5PVVUzVFJERUF4aW1CU2dLTWdhaEpJNnVGUVk=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNUNVazVoVG5KNlJuQm5PVVUzVFJERUF4aW1CU2dLTWdhaEpJNnVGUVk"
               },
               "hasSubnews": false
           },
           {
               "title": "Crypto’s $135 Million Campaign Is Undefeated in 48 Races So Far",
               "snippet": "The industry is taking a victory lap — and betting its lavish and bipartisan spending translates to influence in Washington.",
               "publisher": "Bloomberg",
               "timestamp": "1731071839000",
               "newsUrl": "https://www.bloomberg.com/news/articles/2024-11-08/crypto-s-135-million-campaign-is-undefeated-in-48-races-so-far",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNHlNMVJMZGt0dFRrdDBNbFJ0VFJERUF4aW1CU2dLTWdZVkpJcUptUW8=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNHlNMVJMZGt0dFRrdDBNbFJ0VFJERUF4aW1CU2dLTWdZVkpJcUptUW8"
               },
               "hasSubnews": false
           },
           {
               "title": "Money market account rates today, November 8, 2024 (up to 5.00% APY return)",
               "snippet": "Between March 2022 and July 2023, the Federal Reserve raised its benchmark rate 11 times. As a result, money market account (MMA) interest rates rose ...",
               "publisher": "Yahoo Finance",
               "timestamp": "1731063609000",
               "newsUrl": "https://finance.yahoo.com/personal-finance/money-market-account-rates-today-friday-november-8-2024-110009926.html",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNUJRbEpWTFZCdWVESjRlRE5CVFJDMkF4aTlCU2dLTWdZQmNJeEdzZ1E=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNUJRbEpWTFZCdWVESjRlRE5CVFJDMkF4aTlCU2dLTWdZQmNJeEdzZ1E"
               },
               "hasSubnews": false
           },
           {
               "title": "Exclusive | Trump team weighs Wall Street lawyer Richard Farley as SEC chair candidate: sources",
               "snippet": "A top lawyer on Wall Street known for his work on leveraged buyouts is being floated as a possible candidate to lead the Securities and Exchange Commission ...",
               "publisher": "New York Post ",
               "timestamp": "1731100680000",
               "newsUrl": "https://nypost.com/2024/11/08/business/trump-weighs-wall-street-lawyer-richard-farley-as-sec-chair-candidate-sources/",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNXdibHBPYWt0MWRUWlJObTlYVFJERUF4aW5CU2dLTWdrTklvcjFJS214NVFJ=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iL0NnNXdibHBPYWt0MWRUWlJObTlYVFJERUF4aW5CU2dLTWdrTklvcjFJS214NVFJ"
               },
               "hasSubnews": false
           },
           {
               "title": "Lucid (LCID) has funding for ‘well into 2026’ after Gravity SUV launch, record Q3",
               "snippet": "Lucid Motors (LCID) announced it has enough funding for “well into 2026” after releasing third-quarter earnings. After its third straight quarter of record ...",
               "publisher": "Electrek.co",
               "timestamp": "1731016380000",
               "newsUrl": "https://electrek.co/2024/11/07/lucid-lcid-has-funding-well-into-2026-after-gravity-suv/",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNVdibWxEU25wNlpFTnpXR3BTVFJDUUF4ai1CU2dLTWdZUllvNm9zUVk=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNVdibWxEU25wNlpFTnpXR3BTVFJDUUF4ai1CU2dLTWdZUllvNm9zUVk"
               },
               "hasSubnews": false
           },
           {
               "title": "Mortgage rates could remain stubbornly high after Trump win — here’s why",
               "snippet": "Mortgage rates will likely stay stubbornly high after Donald Trump's White House win – despite the Federal Reserve's interest rate cuts and the ...",
               "publisher": "New York Post ",
               "timestamp": "1731103560000",
               "newsUrl": "https://nypost.com/2024/11/08/business/mortgage-rates-could-remain-high-after-trump-win-heres-why/",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNWxjek13ZEdOWU4xTlBkME5pVFJERUF4aW1CU2dLTWdrQm9JekR3aVExcmdF=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iL0NnNWxjek13ZEdOWU4xTlBkME5pVFJERUF4aW1CU2dLTWdrQm9JekR3aVExcmdF"
               },
               "hasSubnews": false
           },
           {
               "title": "DraftKings takes hit amid ‘worst stretch’ of NFL outcomes",
               "snippet": "DraftKings has lowered its guidance for 2024 amid its 'worst stretch' ever of NFL outcomes during the 2024 season.",
               "publisher": "Awful Announcing",
               "timestamp": "1731094437000",
               "newsUrl": "https://awfulannouncing.com/draftkings/hit-amid-worst-stretch-nfl-outcomes.html",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNW5VWE00VjI1bWRXNW5RbFoyVFJDakF4amJCU2dLTWdZQlVZaTJLQWc=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNW5VWE00VjI1bWRXNW5RbFoyVFJDakF4amJCU2dLTWdZQlVZaTJLQWc"
               },
               "hasSubnews": false
           },
           {
               "title": "Paramount Global Adds 3.5 Million Streaming Subs In Q3 But Revenues Fall 6% As TV & Film Dip",
               "snippet": "Paramount Global has posted lower year-on-year revenue in Q3, but Paramount+ added 3.5 million subscribers as DTC profit hit $49 million.",
               "publisher": "Deadline",
               "timestamp": "1731067560000",
               "newsUrl": "https://deadline.com/2024/11/paramount-global-q3-revenues-fall-streaming-subs-grow-1236170759/",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNHpabkpvTjFSNVFVZEZRVm94VFJEX0FoaXBCU2dLTWdrQklJaWxwV1ltandF=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iL0NnNHpabkpvTjFSNVFVZEZRVm94VFJEX0FoaXBCU2dLTWdrQklJaWxwV1ltandF"
               },
               "hasSubnews": false
           },
           {
               "title": "Silicon Valley is betting a Musk-inspired Trump could unleash a startup boom",
               "snippet": "Silicon Valley anticipates growth with Trump's win and Elon Musk's support, expecting deregulation to boost innovation and help startup and tech-giant ...",
               "publisher": "Business Insider",
               "timestamp": "1731081600000",
               "newsUrl": "https://www.businessinsider.com/elon-musk-could-help-deregulate-tech-amid-a-trump-victory-2024-11",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNHhaRkZQU25GdlFtcGZYMTlFVFJEZUFoaThCU2dLTWdrTlVwakdJbWs5Q2dJ=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iL0NnNHhaRkZQU25GdlFtcGZYMTlFVFJEZUFoaThCU2dLTWdrTlVwakdJbWs5Q2dJ"
               },
               "hasSubnews": false
           },
           {
               "title": "Qantas plane returns to Australia airport, makes emergency landing due to engine failure",
               "snippet": "A Qantas plane made an emergency landing Friday due to what the airline said was a \"contained engine failure\" soon after taking off from Sydney Airport, ...",
               "publisher": "CBS News",
               "timestamp": "1731096604000",
               "newsUrl": "https://www.cbsnews.com/news/qantas-emergency-landing-engine-failure-australia/",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iI0NnNXRUM2xTTlMxRWF6WkNkMEU0VFJDUkF4ajhCU2dLTWdB=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iI0NnNXRUM2xTTlMxRWF6WkNkMEU0VFJDUkF4ajhCU2dLTWdB"
               },
               "hasSubnews": false
           },
           {
               "title": "Mark Zuckerberg not liable in dozens of lawsuits over social media harm to children: judge",
               "snippet": "A federal judge said Meta Platforms CEO Mark Zuckerberg is not personally liable in 25 lawsuits accusing his company of addicting children to social media.",
               "publisher": "New York Post ",
               "timestamp": "1731096660000",
               "newsUrl": "https://nypost.com/2024/11/08/business/mark-zuckerberg-not-liable-in-lawsuits-over-social-media-harm-to-children/",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNVlVRkZJTUY5ZlkxSkxlbWhXVFJERUF4aW5CU2dLTWdhOVE1aFNJUWs=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNVlVRkZJTUY5ZlkxSkxlbWhXVFJERUF4aW5CU2dLTWdhOVE1aFNJUWs"
               },
               "hasSubnews": false
           },
           {
               "title": "OpenAI defeats news outlets' copyright lawsuit over AI training, for now",
               "snippet": "A New York federal judge on Thursday dismissed a lawsuit against artificial intelligence giant OpenAI that claimed it misused articles from news outlets Raw ...",
               "publisher": "Reuters",
               "timestamp": "1731076638000",
               "newsUrl": "https://www.reuters.com/legal/litigation/openai-defeats-news-outlets-copyright-lawsuit-over-ai-training-now-2024-11-07/",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNW1Ra3QzUnpaSFRFTkJNV3RxVFJEckJCanZBeWdLTWdtSm9Zd0d3ZVUwRFFJ=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iL0NnNW1Ra3QzUnpaSFRFTkJNV3RxVFJEckJCanZBeWdLTWdtSm9Zd0d3ZVUwRFFJ"
               },
               "hasSubnews": false
           },
           {
               "title": "How Trump will help EV sector, Appian Corporation CEO: Asking for a Trend",
               "snippet": "Today on Asking for a Trend, Host Josh Lipton focuses on Trump's impact on stock markets (^DJI, ^IXIC, ^GSPC) and Appian Corporation's third quarter ...",
               "publisher": "Yahoo Finance",
               "timestamp": "1731107383000",
               "newsUrl": "https://finance.yahoo.com/video/trump-help-ev-sector-appian-230943351.html",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNDJYMll3Y0dFeWRIazNkRFJTVFJDb0FSaXNBaWdCTWdZQjZZVGt5Z00=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNDJYMll3Y0dFeWRIazNkRFJTVFJDb0FSaXNBaWdCTWdZQjZZVGt5Z00"
               },
               "hasSubnews": false
           },
           {
               "title": "Trump victory hands hedge funds $1.2bn win from bet against renewables",
               "snippet": "Investors running bets against renewable energy stocks have racked up profits of more than $1.2bn from the heavy sell-off that swept the sector in the wake ...",
               "publisher": "Financial Times",
               "timestamp": "1731061402000",
               "newsUrl": "https://www.ft.com/content/3af7966d-6729-433e-9864-3346e039c3ef",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iI0NnNU5TRTFGWkdwaVduYzRia0ZHVFJDS0F4aThCU2dLTWdB=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iI0NnNU5TRTFGWkdwaVduYzRia0ZHVFJDS0F4aThCU2dLTWdB"
               },
               "hasSubnews": false
           },
           {
               "title": "Navigating Post-Election Market Dynamics",
               "snippet": "Liz Ann Sonders and Kathy Jones discuss the market reactions following the election, focusing on the equity and bond markets.",
               "publisher": "Charles Schwab",
               "timestamp": "1731060090000",
               "newsUrl": "https://www.schwab.com/learn/story/navigating-post-election-market-dynamics",
               "hasSubnews": false
           },
           {
               "title": "2025 401(k) Contribution Limits: Bigger Savings, Better Retirement",
               "snippet": "The 401(k) contribution limit for employees in 2025 has increased to $23,500, up from $23,000 in 2024. The employer contribution limit also rises to $46,500 ...",
               "publisher": "Financial Samurai",
               "timestamp": "1731072300000",
               "newsUrl": "https://www.financialsamurai.com/2025-401k-contribution-limits-for-employees-and-employers/",
               "hasSubnews": false
           },
           {
               "title": "Nvidia is Now a Dow Member, as is Paint-Maker Sherwin-Williams",
               "snippet": "Nvidia has become a member of the Dow Jones Industrial Average Friday, replacing storied chipmaker Intel as the artificial intelligence darling cements its ...",
               "publisher": "Investopedia",
               "timestamp": "1731068617000",
               "newsUrl": "https://www.investopedia.com/nvidia-sherwin-williams-join-dow-8742067",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNDFSREJIVEdGQlNFUkZNVkJYVFJERkF4aW1CU2dLTWdtWkFZQU1EV3h6ZWdB=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iL0NnNDFSREJIVEdGQlNFUkZNVkJYVFJERkF4aW1CU2dLTWdtWkFZQU1EV3h6ZWdB"
               },
               "hasSubnews": false
           },
           {
               "title": "Rivian Stock 'Long-Term Winner' In Gas-To-Electric Transition: Analyst",
               "snippet": "Rivian analysts have concerns for the short term after Q3 earnings, but see profitability, the closing of the VW JV and the R2 launch as positive items ...",
               "publisher": "Benzinga",
               "timestamp": "1731080874000",
               "newsUrl": "https://www.benzinga.com/analyst-ratings/analyst-color/24/11/41848846/rivian-stock-long-term-winner-in-gas-to-electric-transition-analyst",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNXhURGhIV2taUmJUaDRXVWsyVFJERUF4aW1CU2dLTWdZbG9KRE50UVk=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNXhURGhIV2taUmJUaDRXVWsyVFJERUF4aW1CU2dLTWdZbG9KRE50UVk"
               },
               "hasSubnews": false
           },
           {
               "title": "Warren Buffett Is Bailing Out of Berkshire Hathaway’s Big Stock Bets",
               "snippet": "Berkshire Hathaway was a net seller of $127 billion of stocks this year, including Apple and Bank of America. That brings its equity portfolio down to $300 ...",
               "publisher": "Barron's",
               "timestamp": "1731099840000",
               "newsUrl": "https://www.barrons.com/articles/warren-buffett-berkshire-hathaway-apple-bank-of-america-stock-fd3ad9fe",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNHlhVVZCY0ZFek1XeFlkRVJEVFJERUF4aW5CU2dLTWdhaFZvWUxwZ2M=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNHlhVVZCY0ZFek1XeFlkRVJEVFJERUF4aW5CU2dLTWdhaFZvWUxwZ2M"
               },
               "hasSubnews": false
           },
           {
               "title": "Bill Ackman Seeks to Scrap Pershing Square, Universal Music Listings in Amsterdam After Attacks",
               "snippet": "Hedge-fund billionaire Bill Ackman said he wanted to terminate the Amsterdam listings of Pershing Square Holdings and Universal Music Group UMG ...",
               "publisher": "The Wall Street Journal",
               "timestamp": "1731083400000",
               "newsUrl": "https://www.wsj.com/business/bill-ackman-seeks-to-scrap-pershing-square-universal-music-listings-in-amsterdam-after-attacks-dfc0c4da",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNUtSbEZuU0ZKd01XbGhhVmRzVFJDZkF4ampCU2dLTWdZdGRZcXV0UVU=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNUtSbEZuU0ZKd01XbGhhVmRzVFJDZkF4ampCU2dLTWdZdGRZcXV0UVU"
               },
               "hasSubnews": false
           },
           {
               "title": "Polymarket CEO Hints At US Comeback After Betting Market's Accurate Trump Victory Prediction: 'It's Part Of The Plan'",
               "snippet": "In the wake of successful predictions for the presidential election, cryptocurrency-based betting platform Polymarket disclosed its intentions to ...",
               "publisher": "Benzinga",
               "timestamp": "1731060761000",
               "newsUrl": "https://www.benzinga.com/24/11/41838037/will-polymarket-return-to-the-us-after-getting-trump-victory-right-ceo-says-its-part-of-the-plan",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iI0NnNUNTbEYxYTBkamFFbHFXblZGVFJERUF4aW5CU2dLTWdB=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iI0NnNUNTbEYxYTBkamFFbHFXblZGVFJERUF4aW5CU2dLTWdB"
               },
               "hasSubnews": false
           },
           {
               "title": "BlackRock’s Bitcoin ETF Is Now Bigger Than Its Gold Fund",
               "snippet": "BlackRock, the world's largest asset manager, now handles more Bitcoin than gold for its flagship iShares exchange-traded funds (ETFs).",
               "publisher": "Decrypt",
               "timestamp": "1731091262000",
               "newsUrl": "https://decrypt.co/290882/blackrock-bitcoin-etf-bigger-gold",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNVNiR1V0YUZGUU4zcGtPRE01VFJDSEF4aVBCaWdLTWdhbE5Jak53UU0=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNVNiR1V0YUZGUU4zcGtPRE01VFJDSEF4aVBCaWdLTWdhbE5Jak53UU0"
               },
               "hasSubnews": false
           },
           {
               "title": "Boeing CEO Takes a Step to Heal Broken Culture",
               "snippet": "Boeing said it will reimburse furloughed workers for lost wages during the recent labor strike. It's one step from new CEO Kelly Ortberg to address the ...",
               "publisher": "Barron's",
               "timestamp": "1731101040000",
               "newsUrl": "https://www.barrons.com/articles/boeing-stock-strike-ceo-c4be1598",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNURNeTB6ZUhobFVteGlNRjlzVFJDcUJCaXFCQ2dLTWdrQllKUkpMdWdWTEFJ=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iL0NnNURNeTB6ZUhobFVteGlNRjlzVFJDcUJCaXFCQ2dLTWdrQllKUkpMdWdWTEFJ"
               },
               "hasSubnews": false
           },
           {
               "title": "It Seems Like People Are Done Paying Over MSRP For New Cars",
               "snippet": "It seems that the era of people willingly overpaying for new cars may be at an end as data shows that the number of people that willingly let dealers ...",
               "publisher": "Jalopnik",
               "timestamp": "1731078000000",
               "newsUrl": "https://jalopnik.com/it-seems-like-people-are-done-paying-over-msrp-for-new-1851692848",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNTFXbk5vYnkxT1RsaGxORzV0VFJEcEFoaUZCU2dLTWdrRkFvaEtQYVZVSVFN=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iL0NnNTFXbk5vYnkxT1RsaGxORzV0VFJEcEFoaUZCU2dLTWdrRkFvaEtQYVZVSVFN"
               },
               "hasSubnews": false
           },
           {
               "title": "Affirm Stock Falls After ‘Drama-Free Quarter.’ What We Know.",
               "snippet": "Affirm flies past quarterly estimates and sees gross merchandise volume soar 35% from a year prior.",
               "publisher": "Barron's",
               "timestamp": "1731084060000",
               "newsUrl": "https://www.barrons.com/articles/affirm-earnings-stock-price-601e9782",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNVRTWEJMYUdwNlFWWXpkRzkwVFJDcUJCaXFCQ2dLTWdZWllKcnBKUWc=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNVRTWEJMYUdwNlFWWXpkRzkwVFJDcUJCaXFCQ2dLTWdZWllKcnBKUWc"
               },
               "hasSubnews": false
           },
           {
               "title": "Bernie Marcus Was One of the All-Time GREATS",
               "snippet": "Get out of the car! Get the f**k out of my car.” That's a paraphrase of the words of the recently passed, and incomparably GREAT Bernie Marcus.",
               "publisher": "RealClearMarkets",
               "timestamp": "1731024145000",
               "newsUrl": "https://www.realclearmarkets.com/articles/2024/11/08/bernie_marcus_was_one_of_the_all-time_greats_1070771.html",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNVdTR2x3TURjdGRFcDZNV3RQVFJDM0FSaVRBaWdCTWdhdFJack9JUWs=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNVdTR2x3TURjdGRFcDZNV3RQVFJDM0FSaVRBaWdCTWdhdFJack9JUWs"
               },
               "hasSubnews": false
           },
           {
               "title": "TGI Fridays Is Getting A Little Nervous About People Sitting On $50 Million In Unused Gift Cards",
               "snippet": "I can't remember the last time I was in a TGI Fridays (although, whenever it was, I'm assuming it was in an airport or next to a hotel) and it would seem ...",
               "publisher": "Outkick",
               "timestamp": "1731008137000",
               "newsUrl": "https://www.outkick.com/culture/tgi-fridays-getting-little-nervous-about-50-million-unused-gift-cards-dont-expire",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iI0NnNUlkMnhaWldnNVRrMXNNWEpaVFJENEFoaWNCU2dLTWdB=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iI0NnNUlkMnhaWldnNVRrMXNNWEpaVFJENEFoaWNCU2dLTWdB"
               },
               "hasSubnews": false
           },
           {
               "title": "Palantir Rakes In $7.7 Billion — Mere Peanuts Next To This",
               "snippet": "In this month's list of new buys by the best mutual funds these savvy investors scooped up an impressive $7.7 billion worth of shares in Palantir ...",
               "publisher": "Investor's Business Daily",
               "timestamp": "1731099600000",
               "newsUrl": "https://www.investors.com/etfs-and-funds/mutual-funds/best-mutual-funds-broadcom-stock-avgo-palantir-nvidia/",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNXdURlpETnpJeGFGQmhWek51VFJDZkF4amlCU2dLTWdhQlFwREpJUWs=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNXdURlpETnpJeGFGQmhWek51VFJDZkF4amlCU2dLTWdhQlFwREpJUWs"
               },
               "hasSubnews": false
           },
           {
               "title": "Dogecoin mirrors Bitcoin: This high correlation means DOGE will now…",
               "snippet": "Dogecoin [DOGE] maintained a significantly high correlation with Bitcoin [BTC] at 0.92, indicating that movements in its price often mirrored those in BTC ...",
               "publisher": "AMBCrypto News",
               "timestamp": "1731124943000",
               "newsUrl": "https://ambcrypto.com/dogecoin-mirrors-bitcoin-this-high-correlation-means-doge-will-now/",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNHlkMlZhVm01dlNHVjNWa05WVFJDdEF4akxCU2dLTWdtZFk0eHVKZWVTVHdF=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iL0NnNHlkMlZhVm01dlNHVjNWa05WVFJDdEF4akxCU2dLTWdtZFk0eHVKZWVTVHdF"
               },
               "hasSubnews": false
           },
           {
               "title": "After Trump Win, Hollywood Prepares for Megamergers — and Volatility",
               "snippet": "On Nov. 7, a day after Donald Trump's victory, Warner Bros. Discovery chief David Zaslav delivered a message: It's open season on dealmaking.",
               "publisher": "Hollywood Reporter",
               "timestamp": "1731085103000",
               "newsUrl": "https://www.hollywoodreporter.com/business/business-news/trump-hollywood-deals-mergers-1236056410/",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNHRUWGRHUVVaWVduSkhSVVprVFJDZkF4amlCU2dLTWdhbFJZVE5JUVU=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNHRUWGRHUVVaWVduSkhSVVprVFJDZkF4amlCU2dLTWdhbFJZVE5JUVU"
               },
               "hasSubnews": false
           },
           {
               "title": "5 Things to Know Before the Stock Market Opens",
               "snippet": "Stock futures were nmostly lower in early trading as momentum from the election faded following the Fed's expected move to cut interest rates.",
               "publisher": "Investopedia",
               "timestamp": "1731070027000",
               "newsUrl": "https://www.investopedia.com/5-things-to-know-before-the-stock-market-opens-november-8-2024-8742070",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNXVlWEpIZG1aTWVsbE5la3R4VFJEUEF4aVhCU2dLTWdhdEpaVE9GUW8=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iK0NnNXVlWEpIZG1aTWVsbE5la3R4VFJEUEF4aVhCU2dLTWdhdEpaVE9GUW8"
               },
               "hasSubnews": false
           },
           {
               "title": "Mortgage rates are likely to stay high after Trump's election win—despite Fed rate cuts",
               "snippet": "Recent interest rate cuts have brought relief to credit card, personal loan and auto borrowers, but homebuyers are unlikely to catch a break as mortgage ...",
               "publisher": "CNBC",
               "timestamp": "1731011913000",
               "newsUrl": "https://www.cnbc.com/2024/11/07/why-mortgage-rates-keep-climbing-despite-fed-interest-rate-cuts.html",
               "images": {
                   "thumbnail": "https://news.google.com/api/attachments/CC8iI0NnNTBiRlpXVlRsaGRYYzBNek5LVFJDZkF4ampCU2dLTWdB=-w280-h168-p-df-rw",
                   "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iI0NnNTBiRlpXVlRsaGRYYzBNek5LVFJDZkF4ampCU2dLTWdB"
               },
               "hasSubnews": false
           }
       ]
       try{ 
        setItems(mockData);
       }
       catch{
        console.log("Something")
       }
   };

   useEffect(
    () => {
        fetchArticles() ;
    } , []
   )
    
  return (

    <div className='mt-[100px] w-full text-center'>
        <div className='font-bold text-4xl underline mb-10'>
            Recent Top Voices
        </div>
   
    <div className="  p-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        
    {items?.map((article, index) => (
      <NewsCard
        key={index}
        image={article.images?.thumbnail}  // Access the thumbnail here
        title={article.title}
        snippet={article.snippet}
        publisher={article.publisher}
        url={article.newsUrl}
        publishedAt={article.timestamp}
      />
    ))}
  </div>
  </div>
  )
}

export default News

