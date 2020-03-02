---
title: Vuepress
---

# Vuepress

- [Create a blog](https://blog.logrocket.com/how-create-portfolio-blog-using-vuepress-markdown/)
- [Vuepress examples](https://vuepress-examples.netlify.com/demos/video/)
- [Tailwind Conversion](https://dev.to/vuevixens/build-a-beautiful-website-with-vuepress-and-tailwindcss--3a03)

## Why?

- Fast to load
- Fast for getting ideas out
- Easy to rearrange understand due to folder structure
- Content can easily be repurposed
- Edit in VS Code or direct in BitBucket
- PR to update content

## Markdown Examples

https://vuepress.vuejs.org/guide/markdown.html#table-of-contents

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

:tada: :100:

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in IE / Edge
:::

Custom

::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code

```js
console.log('Hello, VuePress!');
```

:::

## Plugins

- [Flowchart](https://flowchart.vuepress.ulivz.com/)
- [Embed Video](https://github.com/cmrd-senya/markdown-it-html5-embed)

### Flowchart

#### Basic

@flowstart
st=>start: Start
e=>end: End

st->e
@flowend

#### Complex

@flowstart
st=>start: Start|past:>http://www.google.com[blank]
e=>end: End|future:>http://www.google.com
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>http://www.google.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
@flowend

## Embed Video

https://github.com/vuejs/vuepress/issues/870

using an iframe sometimes works with YouTube

<iframe style="margin-top:20px" width="560" height="420" src="http://gensolve-docs.s3-ap-southeast-2.amazonaws.com/GPM/6.5/Videos/Administration/How%20to%20Create%20a%20Patient%20Goal/How_to_Create_a_Patient_Goal_UK.mp4" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>

<video width="560" height="240" controls>
  <source src="http://gensolve-docs.s3-ap-southeast-2.amazonaws.com/GPM/6.5/Videos/Administration/How%20to%20Create%20a%20Patient%20Goal/How_to_Create_a_Patient_Goal_UK.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
