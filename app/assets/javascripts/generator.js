function insert(str) {
    var args = [].slice.call(arguments, 1),
        i = 0;
    return str.replace(/%s/g, function () {
        return args[i++];
    });
}


    function generateSubject() {
        var subjects = {
            'people': [
                'Trump',
                'Kim Jong Un',
                'Taylor Swift',
                'J Powell',
                'Peter Schiff',
                'Joe Weisenthal',
                'Brent Johnson',
                'Erik Townsend',
                'Quoth the Raven',
                'Ramp Capital',
                'Jurrien Timmer',
                'Sunny Po',
                'Alex Younger',
                'Nassim Taleb',
                'Sven Henrich',
                'Dave Portnoy',
                'Warren Buffett',
                'Larry Kudlow',
                'Jim Cramer',
                'Keith McCullough',
            ],
            // 'things': [
            //     'The Sun',
            //     'A looter',
            //     'A random homeless person',
            // ],
            'places': [
                'Earth',
                'California',
                'New York',
                'US',
                'China',
                'Japan',
                'Germany',
                'India',
                'UK',
                'France',
                'Brazil',
                'Italy',
                'Canada',
                'Russia',
                'South Korea',
                'Australia',
                'Spain',
                'Mexico',
                'Turkey',
                'Netherlands',
                'Saudi Arabia',
                'Switzerland',
                'Argentina',
                'Sweden',
                'Poland',
                'Belgium',
                'Thailand',
                'Iran',
                'Austria',
                'Norway',
                'United Arab Emirates',
                'Nigeria',
                'Israel',
                'South Africa',
                'Hong Kong',
                'Ireland',
                'Denmark',
                'Singapore',
                'Bangladesh',
                'Egypt',
                'Vietnam',
                'Portugal',
                'Peru',
                'New Zealand',
                'Greece',
            ],
            // 'entities': [
            //     'The Fed',
            //     'ZeroHedge',
            //     'CNBC',
            //     'Bloomberg',
            //     'Reuters',
            // ],
            'business': [
                'Tesla',
                '3M',
                'American Express',
                'Apple',
                'Boeing',
                'Caterpillar',
                'Chevron',
                'Cisco Systems',
                'Coca-Cola',
                'Dow Inc.',
                'ExxonMobil',
                'Goldman Sachs',
                'Home Depot',
                'IBM',
                'Intel',
                'Johnson & Johnson',
                'JPMorgan Chase',
                'McDonalds',
                'Microsoft',
                'Nike',
                'Pfizer',
                'Procter & Gamble',
                'United Airlines',
                'American Airlines',
                'Verizon',
                'Visa',
                'Walmart',
                'Walgreens',
                'Disney',
                'Salesforce',
                'Ford',
                'General Electric',
                'Netflix',
                'Amazon',
                'NVIDIA',
                'Chipotle',
                'PayPal',
                'Kohls',
                'Macys',
                'Berkshire Hathaway',
            ],
        }

        var keys = Object.keys(subjects);
        var random_key_index = Math.floor(Math.random() * keys.length);
        var randomkey = keys[random_key_index];

        var random_subject_index = Math.floor(Math.random() * subjects[randomkey].length);
        var randomsubject = subjects[randomkey][random_subject_index];

        return [randomsubject, randomkey];
    }

    function generatePredicate(subject, category) {
        var predicates = {
            // 'things': [
            //     '%s exploded.',
            // ],
            'business': [
                '%s was looted.',
                '%s has filed for bankrupcty.',
                '%s is on fire.',
                '%s has laid off all employees.',
                '%s is selling crack to stay in business.',
                '%s is giving blowies to stay in business.',
                '%s is buying WeWork.',
                '%s literally just put a giant question mark on their balance sheet.',
                '%s says they wont release earnings until you buy their stock.',
                '%s asks why they need to release their earnings.',
                '%s has banned Zerohedge.',
                '%s is somehow trading negative.',
                '%s exploded.',
                '%s says will start beating people unless pe ratio reaches one million.',
            ],
            // 'entities': [
            //     '%s exploded.',
            //     '%s gave me covid 19.',
            //     '%s was looted.',
            // ],
            'people': [
                '%s contracted covid 19.',
                '%s was beaten by police with night sticks.',
                '%s has visible load stain on crotch.',
                '%s posted genitalia online.',
                '%s is shorting everything',
                '%s gave me covid 19.',
                '%s is betting against America.',
                '%s exploded.',
            ],
            'places': [
                '%s exploded.',
                '%s is short American stocks',
                'Everyone in %s has died.',
                '%s has declared war on America.',
                '%s has been discovered to not exist, in what geographers call "a big fuckup".',
                '%s is influencing the US election.',
                '%s has hacked into the NYSE and shorted all stocks.',
            ],
        }

        var random_index = Math.floor(Math.random() * predicates[category].length);
        var random_predicate = predicates[category][random_index];


        var rationalization = insert(random_predicate, subject);

        return rationalization;
    }

    function generateCalltoAction(rationalization) {
        var callToActions = [
            'Buy.',
            'Buy Stocks.',
            'Bullish.',
            'Very bullish.',
            'Short squeeze',
            'Cover shorts.',
            'Go long.',
            'Priced in.',
            'Investors say this was already priced in.',
        ];

        var random_index = Math.floor(Math.random() * callToActions.length);
        var random_cta = " " + callToActions[random_index];

        return rationalization.concat(random_cta);
    }