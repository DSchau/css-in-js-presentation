import React, { Component } from 'react';
import { Heading, Layout, Fill, Link, List, ListItem, Text } from 'spectacle';
import chunk from 'lodash.chunk';
import GlobeIcon from 'react-icons/lib/fa/globe';

import TwitterIcon from 'react-icons/lib/fa/twitter';
import GithubIcon from 'react-icons/lib/fa/github';
import WebsiteIcon from 'react-icons/lib/md/web';

import Smiley from 'emojione/assets/svg/1f642.svg';

import { Image } from 'components';

const people = {
  glen: ['glenmaddern', require('./assets/images/people/glen-maddern.png')],
  kent: ['kentcdodds', require('./assets/images/people/kent-dodds.jpg')],
  kye: ['tkh44', require('./assets/images/people/kye-hohenberger.jpg')],
  mark: ['markdalgleish', require('./assets/images/people/mark-dalgleish.jpg')],
  max: ['mxstbr', require('./assets/images/people/max-stoiber.jpg')],
  oleg: ['oleg008', require('./assets/images/people/oleg-slobodskoi.jpg')],
  phil: ['_philpl', require('./assets/images/people/phil-pluckthun.jpg')],
  sunil: ['threepointone', require('./assets/images/people/sunil-pai.jpg')],
  vjeux: ['vjeux', require('./assets/images/people/vjeux.jpg')]
};

const images = {
  thankYou: 'https://media.giphy.com/media/KJ1f5iTl4Oo7u/giphy.gif',
  questions: 'https://media.giphy.com/media/l4FGroaKiE5uuMBiM/giphy.gif'
};

export const PeopleToFollow = () =>
  <div>
    {chunk(Object.keys(people), 3).map(list =>
      <Layout key={list.join(' ')} style={{ padding: 10 }}>
        {list.map(person => {
          const [handle, image] = people[person];
          return (
            <Fill key={person}>
              <Link
                href={`https://twitter.com/${handle}`}
                target="_blank"
                rel="noopener"
              >
                <Image
                  src={image}
                  style={{ borderRadius: '20vh', height: '20vh' }}
                />
                <Text
                  style={{ margin: 0, padding: 0 }}
                  textColor="secondary"
                  textSize={18}
                  textAlign="center"
                >
                  @{handle}
                </Text>
              </Link>
            </Fill>
          );
        })}
      </Layout>
    )}
  </div>;

PeopleToFollow.Props = {
  bgColor: 'white',
  notes: `
One of the best ways I've found to keep up with the latest technology updates, as well as just edify your currenet knowledge of common front-end (read: CSS in JS!) knowledge is to follow active community leaders on Twitter.

Each of the people listed here are worth a follow, as they have some really interesting, great things to say and share about CSS in JS.
  `
};

export const Attributions = () =>
  <div>
    <Heading size={3} textColor="secondary" caps>
      Attributions
    </Heading>
    <List style={{ listStyleType: 'none', padding: 0 }}>
      {[
        [
          'https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660',
          'A Unified Styling Language (Blog Post)'
        ],
        [
          'https://markdalgleish.github.io/presentation-a-unified-styling-language/#14',
          'A Unified Styling Language (Presentation)'
        ],
        ['https://speakerdeck.com/vjeux/react-css-in-js', 'React: CSS in JS'],
        [
          'http://mxstbr.blog/2016/11/inline-styles-vs-css-in-js/',
          'Writing your styles in JS ≠ writing inline styles'
        ],
        [
          'https://speakerdeck.com/didoo/let-there-be-peace-on-css',
          'Let there be Peace on CSS'
        ],
        [
          'https://reactarmory.com/answers/how-can-i-use-css-in-js-securely',
          'How Can I use CSS in JS Securely?'
        ]
      ].map(([href, description]) => {
        return (
          <ListItem key={description}>
            <GlobeIcon color="white" style={{ marginRight: 8 }} />
            <Link href={href} textColor="white" target="_blank" rel="noopener">
              {description}
            </Link>
          </ListItem>
        );
      })}
    </List>
  </div>;

Attributions.Props = {
  notes: `
This talk, and so many other things in the front-end community, would not be possible without the work of so many others. To them, I am so very grateful. Hopefully I, too, have contributed to the conversation!

> If I have seen further, it is by standing on the shoulders of giants
  `
};

export const Links = () =>
  <div>
    <Heading size={3} textColor="secondary" caps>
      Requisite Links
    </Heading>
    <List style={{ listStyleType: 'none', padding: 0 }}>
      {[
        [
          'https://dschau.github.io/css-in-js-playground/',
          'CSS in JS Playground Source'
        ],
        ['https://github.com/DSchau/css-in-js-presentation', 'Slidedeck Repo'],
        [
          'https://medium.com/p/css-in-js-benefits-drawback-and-tooling-80286b03f9aa',
          'Blog Post'
        ]
      ].map(([href, description]) => {
        return (
          <ListItem key={description}>
            <GlobeIcon color="white" style={{ marginRight: 8 }} />
            <Link href={href} textColor="white" target="_blank" rel="noopener">
              {description}
            </Link>
          </ListItem>
        );
      })}
    </List>
  </div>;

export const FinTheEndThatsAllFolks = () =>
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      height: '85vh',
      width: '80vw',
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    }}
  >
    {[
      {
        href: 'https://twitter.com/schaudustin',
        Icon: TwitterIcon,
        text: '@schaudustin'
      },
      {
        href: 'https://github.com/dschau',
        Icon: GithubIcon,
        text: 'dschau'
      },
      {
        href: 'https://dustinschau.com',
        Icon: WebsiteIcon,
        text: 'website'
      }
    ].map(({ href, Icon, text }) =>
      <Link
        href={href}
        textColor="white"
        style={{ display: 'block' }}
        target="_blank"
        rel="noopener"
        key={text}
      >
        <Icon color="white" style={{ marginRight: 6 }} />
        {text}
      </Link>
    )}
  </div>;

FinTheEndThatsAllFolks.Props = {
  bgImage: images.thankYou,
  notes: `
One final thank you to the organizers and sponsors of this conference, and for giving me an opportunity to present at my first ever conference.

I'd like to also thank each of the attendees. Without you, each of us would be speaking to an empty room, and where's the fun in that!?
  
... and finally, I'd like to thank everyone who attended my NebraskaJS meetup, in particular [Matthew Steele](https://twitter.com/mattdsteele?lang=en), for invaluable advice and support with an earlier iteration of this talk. In addition, [Phil Plückthun](https://twitter.com/_philpl) for some great advice, as well.
  `
};
