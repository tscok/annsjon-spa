import React from 'react'

import Anchor from '../../components/Anchor'
import Author from '../../components/Author'
import Figure from '../../components/Figure'
import Image from '../../components/Image'
import Quote from '../../components/Quote'

import imageSource from '../../assets/mountainfit.jpg'

const Mountainfit = () => (
  <article>
    <h3>Mountainfit - a volunteer's tale</h3>
    <p>
      <i>by Meera Lee Sethi, published 9 October 2012</i>
    </p>
    <Figure caption="Lake Annsjon. Photo: Meera Lee Sethi">
      <Image source={imageSource} />
    </Figure>
    <p>
      I'm a freelance science writer who's lived in cities all her life. When I became a birder a
      few years ago, I realized that I didn't just want to go out to the lake on a weekend morning
      and look at warblers and sparrows through my binoculars — I wanted a chance to actively rejoin
      the natural world, and to get much closer to the birds I was so interested in. I didn't have
      any experience in field techniques or handling live birds when I first contacted Lake Ånnsjön
      Bird Observatory back in the winter of 2010, but I was welcomed with open arms and assured
      that I would have every opportunity to be a part of whatever research was going on here. And
      that's just what happened. In 2011, I traveled from Chicago to Handöl and spent nine weeks as
      a volunteer here, mainly working on the Great Snipe inventory, migration, and radio-tracking
      project but also learning how to ring, walking census routes, and helping out on the
      observatory's nest-box project.
    </p>
    <Quote>
      You might stumble upon a goldeneye's nest full of eggs or watch a long-eared owl swooping for
      a lemming.
      <Author>Meera Lee Sethi</Author>
    </Quote>
    <p>
      After a summer's worth of hiking in the gorgeous green mountains and lush mires full of
      cloudberries and orange peat moss, I can tell you that there are few better places to be a
      bird volunteer — especially if you want to get out of the city and be in a truly calm, quiet,
      pristine environment. There might be a few rainy days on which work won't be possible, but if
      you're stuck indoors you can at least be sure that you will have the company of a crew of
      wonderful staff and fellow volunteers, and be housed in cozy accommodations. Whether you come
      for a weekend, a few weeks, or longer, you'll have the chance to get to know bluethroats and
      skuas, snow buntings and red-necked pharalopes, three-toed woodpeckers and siberian jays. You
      might stumble upon a goldeneye's nest full of eggs or watch a long-eared owl swooping for a
      lemming. And don't forget that every bird you see will be in splendid breeding plumage, deep
      in nesting, singing, and mating mode.
    </p>
    <p>
      I've written far more than anyone else probably wants to know about the things I learned, the
      people I met, and the birds I saw Ånnsjöns Fågelstation in a little book of short nature
      essays called <Anchor href="http://www.scienceessayist.com/book/" label="Mountainfit" />.
      Whether or not you read it, I hope you will consider becoming a volunteer at this wonderful —
      and, I think, unique — place. It was one of the loveliest experiences I've ever had.
    </p>
  </article>
)

export default Mountainfit
