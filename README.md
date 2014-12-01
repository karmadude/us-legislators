# US Legislators

US Legislators data in JSON. 

### Installing

```
bower install us-legislators
```

### Data

The following files contain the required data:

#### legislator.json
```
{
  "id": {
    "bioguide": "C000127",
    "thomas": "00172",
    "lis": "S275",
    "govtrack": 300018,
    "opensecrets": "N00007836",
    "votesmart": 27122,
    "fec": [
      "S8WA00194",
      "H2WA01054"
    ],
    "cspan": 26137,
    "wikipedia": "Maria Cantwell",
    "house_history": 10608,
    "ballotpedia": "Maria Cantwell",
    "maplight": 4541,
    "washington_post": "gIQAZxKkDP",
    "icpsr": 39310
  },
  "name": {
    "first": "Maria",
    "last": "Cantwell",
    "official_full": "Maria Cantwell"
  },
  "bio": {
    "birthday": "1958-10-13",
    "gender": "F",
    "religion": "Roman Catholic"
  },
  "terms": [
    {
      "type": "rep",
      "start": "1993-01-05",
      "end": "1994-12-01",
      "state": "WA",
      "district": 1,
      "party": "Democrat"
    },
    ...
    {
      "type": "sen",
      "start": "2013-01-03",
      "end": "2019-01-03",
      "state": "WA",
      "party": "Democrat",
      "class": 1,
      "url": "http://www.cantwell.senate.gov",
      "address": "311 Hart Senate Office Building Washington DC 20510",
      "phone": "202-224-3441",
      "fax": "202-228-0514",
      "contact_form": "http://www.cantwell.senate.gov/public/index.cfm/email-maria",
      "office": "311 Hart Senate Office Building",
      "state_rank": "junior",
      "rss_url": "http://www.cantwell.senate.gov/public/index.cfm/rss/feed"
    },
    ...
  ],
  "social": {
    "twitter": "CantwellPress",
    "youtube": "SenatorCantwell",
    "youtube_id": "UCN52UDqKgvHRk39ncySrIMw"
  },
  "committees": [
    {
      "committee_id": "SSCM01",
      "rank": 1,
      "title": "Chairman",
      "party": "majority"
    },
    ...
  ]
}
```

#### committees.json
```
{
  "type": "house",
  "name": "House Committee on Agriculture",
  "url": "http://agriculture.house.gov/",
  "thomas_id": "HSAG",
  "house_committee_id": "AG",
  "subcommittees": [
    {
      "name": "Conservation, Energy, and Forestry",
      "thomas_id": "15",
      "address": "1301 LHOB; Washington, DC 20515",
      "phone": "(202) 225-2171"
    },
    ...
  ],
  "address": "1301 LHOB; Washington, DC 20515-6001",
  "phone": "(202) 225-2171",
  "rss_url": "http://agriculture.house.gov/rss.xml",
  "jurisdiction": "The House Committee on Agriculture has jurisdiction over federal agriculture policy and oversight of some federal agencies, and it can recommend funding appropriations for various governmental agencies, programs, and activities, as defined by House rules.",
  "jurisdiction_source": "http://en.wikipedia.org/wiki/House_Committee_on_Agriculture"
}
```

The data is generated from congress-legilators data provided by https://github.com/unitedstates/congress-legislators. This original data is in `YAML` format and the `JSON` version can be found in `data` folder.

### Modifying

```
npm install us-legislators
```

To update the files, first update bower dependencies by running `bower install` and then `make`.

Contribute to the project by forking this repo and submitting pull requests.

### Examples

- [US Senate and House Legislator Terms](http://indic8r.com/us/career-politicians)





