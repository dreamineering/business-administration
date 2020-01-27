---
title: Vuepress
---

# Vuepress

## Why?

- Fast to load
- Fast for getting ideas out
- Easy to rearrange understand due to folder structure
- Content can easily be repurposed
- Edit in VS Code or direct in BitBucket
- PR to update content
- [Tailwind Conversion](https://dev.to/vuevixens/build-a-beautiful-website-with-vuepress-and-tailwindcss--3a03)

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

## Plugins

- [flowchart](https://flowchart.vuepress.ulivz.com/)
- [embed video](http://hanxue-it.blogspot.com/2019/07/vuepress-how-to-embed-video-in-markdown.html)

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

## Links

[Create a blog](https://blog.logrocket.com/how-create-portfolio-blog-using-vuepress-markdown/)
