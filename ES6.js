/* eslint-disable no-console */
const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann']

const employersNames = employers.filter((name) => name != '').map((name) => name.toLowerCase().trim()).join()

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
}

const calcCash = (own = 0) => {
    const { cash: [...allCash] } = sponsors
    let total = own
    total = allCash.reduce((a, b) => a + b)
    return total
}

const money = calcCash()

const makeBusiness = (owner, cash, emp, director = 'Victor') => {
    const { eu: [firstEU, ...euSponsors], rus: [...rusSponsors] } = sponsors
    const sumSponsors = [firstEU, ...euSponsors, ...rusSponsors, 'unexpected sponsor'].join(' ')
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`)
    console.log('And we have a sponsors:')
    console.log(sumSponsors)
    console.log(`Note. Be careful with ${firstEU} It's a huge risk.`)
}

makeBusiness('Sam', money, employersNames)