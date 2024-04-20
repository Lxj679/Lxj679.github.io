import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as l,c as u,e as r,w as a,a as p,d as s,b as n}from"./app-DKtRHpkF.js";const d={},k=p(`<h2 id="_1-如何构建一个电话薄" tabindex="-1"><a class="header-anchor" href="#_1-如何构建一个电话薄"><span>1. 如何构建一个电话薄</span></a></h2><p>我们有以下联系人：</p><table><thead><tr><th>姓名</th><th>手机号</th></tr></thead><tbody><tr><td>李雷</td><td>123456</td></tr><tr><td>韩梅梅</td><td>132456</td></tr><tr><td>大卫</td><td>154389</td></tr><tr><td>Mr.Liu</td><td>131452</td></tr><tr><td>Bornforthis</td><td>180595</td></tr><tr><td>Alexa</td><td>131559</td></tr></tbody></table><p>如何用以往学过的知识构建要给具有用户输入查询功能的电话薄</p><blockquote><p>变量、数字型、列表、元组、字符串</p></blockquote><p>程序运行效果：</p><ul><li>测试一：</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>Enter your search name<span class="token punctuation">:</span> 李雷
The 李雷 phone number <span class="token keyword">is</span><span class="token punctuation">:</span> <span class="token number">123456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>测试二：</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>Enter your search name<span class="token punctuation">:</span> Bornforthis
The 李雷 phone number <span class="token keyword">is</span><span class="token punctuation">:</span> <span class="token number">180595</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,10),m=n("div",{class:"language-python line-numbers-mode","data-ext":"py","data-title":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token comment"},"# 方法二"),s(`
names `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'李雷'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'韩梅梅'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'大卫'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'Mr.Liu'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'Bornforthis'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'Alexa'"),n("span",{class:"token punctuation"},"]"),s(`
numbers `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"123456"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"132456"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"154389"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"131452"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"180595"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"121559"),n("span",{class:"token punctuation"},"]"),s(`
dictionary `),n("span",{class:"token operator"},"="),s(" names "),n("span",{class:"token operator"},"+"),s(` numbers

name `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token builtin"},"input"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Enter your search name: '"),n("span",{class:"token punctuation"},")"),s(`
position `),n("span",{class:"token operator"},"="),s(" dictionary"),n("span",{class:"token punctuation"},"."),s("index"),n("span",{class:"token punctuation"},"("),s("name"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"("),n("span",{class:"token builtin"},"len"),n("span",{class:"token punctuation"},"("),s("dictionary"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"/"),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(`
number `),n("span",{class:"token operator"},"="),s(" dictionary"),n("span",{class:"token punctuation"},"["),s("position"),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string-interpolation"},[n("span",{class:"token string"},'f"The '),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),s("name"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"}," phone number is: "),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-python line-numbers-mode","data-ext":"py","data-title":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token comment"},"# 方法三"),s(`
names `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'李雷'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'韩梅梅'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'大卫'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'Mr.Liu'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'Bornforthis'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'Alexa'"),n("span",{class:"token punctuation"},"]"),s(`
numbers `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"123456"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"132456"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"154389"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"131452"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"180595"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"121559"),n("span",{class:"token punctuation"},"]"),s(`
dictionary `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token builtin"},"list"),n("span",{class:"token punctuation"},"("),n("span",{class:"token builtin"},"zip"),n("span",{class:"token punctuation"},"("),s("names"),n("span",{class:"token punctuation"},","),s(" numbers"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`

name `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token builtin"},"input"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Enter your search name: '"),n("span",{class:"token punctuation"},")"),s(`
position `),n("span",{class:"token operator"},"="),s(" names"),n("span",{class:"token punctuation"},"."),s("index"),n("span",{class:"token punctuation"},"("),s("name"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("position"),n("span",{class:"token punctuation"},")"),s(`
number `),n("span",{class:"token operator"},"="),s(" dictionary"),n("span",{class:"token punctuation"},"["),s("position"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string-interpolation"},[n("span",{class:"token string"},'f"The '),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),s("name"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"}," phone number is: "),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=p(`<h2 id="_2-字典结构" tabindex="-1"><a class="header-anchor" href="#_2-字典结构"><span>2. 字典结构</span></a></h2><ul><li>用花括号表示字典</li><li>字典内每一项都有两个元素组成：key and value <ul><li><code>{key: value, key: value}</code></li></ul></li><li>各项用逗号隔开</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>dictionary <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;李雷&#39;</span><span class="token punctuation">:</span> <span class="token number">1234</span><span class="token punctuation">,</span><span class="token string">&#39;韩梅梅&#39;</span><span class="token punctuation">:</span><span class="token number">3456</span><span class="token punctuation">,</span><span class="token string">&#39;马冬梅&#39;</span><span class="token punctuation">:</span><span class="token number">7891</span><span class="token punctuation">}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>dictionary<span class="token punctuation">[</span><span class="token string">&#39;李雷&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token number">1234</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-字典结构-key-value" tabindex="-1"><a class="header-anchor" href="#_3-字典结构-key-value"><span>3. 字典结构 key &amp; value</span></a></h2><ul><li>key 和 value 是一一对应，同一个键只能有一个对应的值；</li><li>键的类型选的是不可变的，如元组；</li><li>value 的类型是任意的；</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>names <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;李雷&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">:</span> <span class="token number">1234</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">:</span> <span class="token string">&#39;bool&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">:</span><span class="token string">&#39;int&#39;</span><span class="token punctuation">}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>names<span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;李雷&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">:</span> <span class="token number">1234</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">:</span> <span class="token string">&#39;bool&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">:</span> <span class="token string">&#39;int&#39;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-用字典-dict-函数创建字典" tabindex="-1"><a class="header-anchor" href="#_4-用字典-dict-函数创建字典"><span>4. 用字典 dict 函数创建字典</span></a></h3><ul><li>方法一： 根据其他序列创建新建字典</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>message <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">&#39;lilei&#39;</span><span class="token punctuation">,</span> <span class="token number">98</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;hanmeimei&#39;</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
list_to_dict <span class="token operator">=</span> <span class="token builtin">dict</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>list_to_dict<span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token punctuation">{</span><span class="token string">&#39;lilei&#39;</span><span class="token punctuation">:</span> <span class="token number">98</span><span class="token punctuation">,</span> <span class="token string">&#39;hanmeimei&#39;</span><span class="token punctuation">:</span> <span class="token number">99</span><span class="token punctuation">}</span>


message <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;lilei&#39;</span><span class="token punctuation">,</span> <span class="token number">98</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;hanmeimei&#39;</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
list_to_dict <span class="token operator">=</span> <span class="token builtin">dict</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>list_to_dict<span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token punctuation">{</span><span class="token string">&#39;lilei&#39;</span><span class="token punctuation">:</span> <span class="token number">98</span><span class="token punctuation">,</span> <span class="token string">&#39;hanmeimei&#39;</span><span class="token punctuation">:</span> <span class="token number">99</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>方法二：</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>d <span class="token operator">=</span> <span class="token builtin">dict</span><span class="token punctuation">(</span>lilei<span class="token operator">=</span><span class="token number">98</span><span class="token punctuation">,</span> hanmeimei<span class="token operator">=</span><span class="token number">99</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token punctuation">{</span><span class="token string">&#39;lilei&#39;</span><span class="token punctuation">:</span> <span class="token number">98</span><span class="token punctuation">,</span> <span class="token string">&#39;hanmeimei&#39;</span><span class="token punctuation">:</span> <span class="token number">99</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">上面两种创建字典的方法，有什么优缺点？</p><p>上面方法一的方法，可以更好的适配字典的各种数据类型情况。why？——因为结构是列表里面放元组，而元组的 0 号为放 key， 1号位放 value 。所以，只要是不可变的数据类型都可以放在 0 号位。</p><p>反之方法二：第一个位置必须是’变量‘，不能是其他数据类型。如：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>d1 <span class="token operator">=</span> <span class="token builtin">dict</span><span class="token punctuation">(</span>lilei<span class="token operator">=</span><span class="token number">98</span><span class="token punctuation">,</span> hanmeimei<span class="token operator">=</span><span class="token number">99</span><span class="token punctuation">)</span>
d2 <span class="token operator">=</span> <span class="token builtin">dict</span><span class="token punctuation">(</span><span class="token string">&#39;lilei&#39;</span><span class="token operator">=</span><span class="token number">98</span><span class="token punctuation">,</span> <span class="token string">&#39;hanmeimei&#39;</span><span class="token operator">=</span><span class="token number">99</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的第二行代码，看起来就很奇怪了，一共有两个值一个值是 <code>lilei</code> 另一个值 98 两个都是值， 可以用 <code>98 </code>赋值给另一个值吗？————显然是不行的。</p><p>我们的赋值是需要把一个值赋值给一个变量（有空间）。</p><p>所以，第二种方法虽然可以创建字典，但是对于字典 key 的各种情况并不能完全支持。</p><blockquote><p>Output 时第二种的 key 只能得到字符串</p></blockquote></div><h2 id="_5-访问字典数据" tabindex="-1"><a class="header-anchor" href="#_5-访问字典数据"><span>5. 访问字典数据</span></a></h2><h3 id="_5-1-中括号访问" tabindex="-1"><a class="header-anchor" href="#_5-1-中括号访问"><span>5.1 中括号访问</span></a></h3><ul><li>利用中括号加要查询的 key</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>grade <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;lilei&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;98&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;hanmeimei&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;99&#39;</span><span class="token punctuation">}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>grade<span class="token punctuation">[</span><span class="token string">&#39;lilei&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token number">98</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function h(y,g){const o=c("CodeTabs");return l(),u("div",null,[k,r(o,{id:"95",data:[{id:"code2"},{id:"code3"}]},{title0:a(({value:t,isActive:e})=>[s("code2")]),title1:a(({value:t,isActive:e})=>[s("code3")]),tab0:a(({value:t,isActive:e})=>[m]),tab1:a(({value:t,isActive:e})=>[b]),_:1}),v])}const f=i(d,[["render",h],["__file","7.dictionary.html.vue"]]),T=JSON.parse('{"path":"/Notability/python/7.dictionary.html","title":"7. Dictionary","lang":"zh-CN","frontmatter":{"title":"7. Dictionary","date":"2024-04-20T07:32:05.000Z","isOriginal":true,"category":["python"],"tag":["python","编程","教程"],"icon":"python","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"editLink":true,"backToTop":true,"toc":true,"description":"1. 如何构建一个电话薄 我们有以下联系人： 如何用以往学过的知识构建要给具有用户输入查询功能的电话薄 变量、数字型、列表、元组、字符串 程序运行效果： 测试一： 测试二： 2. 字典结构 用花括号表示字典 字典内每一项都有两个元素组成：key and value {key: value, key: value} 各项用逗号隔开 3. 字典结构 key...","head":[["meta",{"property":"og:url","content":"https://dailyrecord4ryan.com/Notability/python/7.dictionary.html"}],["meta",{"property":"og:site_name","content":"Website of Ryan"}],["meta",{"property":"og:title","content":"7. Dictionary"}],["meta",{"property":"og:description","content":"1. 如何构建一个电话薄 我们有以下联系人： 如何用以往学过的知识构建要给具有用户输入查询功能的电话薄 变量、数字型、列表、元组、字符串 程序运行效果： 测试一： 测试二： 2. 字典结构 用花括号表示字典 字典内每一项都有两个元素组成：key and value {key: value, key: value} 各项用逗号隔开 3. 字典结构 key..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-20T01:12:06.000Z"}],["meta",{"property":"article:author","content":"Ryan"}],["meta",{"property":"article:tag","content":"python"}],["meta",{"property":"article:tag","content":"编程"}],["meta",{"property":"article:tag","content":"教程"}],["meta",{"property":"article:published_time","content":"2024-04-20T07:32:05.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-20T01:12:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"7. Dictionary\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-20T07:32:05.000Z\\",\\"dateModified\\":\\"2024-04-20T01:12:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan\\",\\"url\\":\\"https://dailyrecord4ryan.com\\"}]}"]]},"headers":[{"level":2,"title":"1. 如何构建一个电话薄","slug":"_1-如何构建一个电话薄","link":"#_1-如何构建一个电话薄","children":[]},{"level":2,"title":"2.  字典结构","slug":"_2-字典结构","link":"#_2-字典结构","children":[]},{"level":2,"title":"3. 字典结构 key & value","slug":"_3-字典结构-key-value","link":"#_3-字典结构-key-value","children":[{"level":3,"title":"4. 用字典 dict 函数创建字典","slug":"_4-用字典-dict-函数创建字典","link":"#_4-用字典-dict-函数创建字典","children":[]}]},{"level":2,"title":"5. 访问字典数据","slug":"_5-访问字典数据","link":"#_5-访问字典数据","children":[{"level":3,"title":"5.1 中括号访问","slug":"_5-1-中括号访问","link":"#_5-1-中括号访问","children":[]}]}],"git":{"createdTime":1713572408000,"updatedTime":1713575526000,"contributors":[{"name":"Lxj679","email":"2944170474@qq.com","commits":3}]},"readingTime":{"minutes":2.7,"words":810},"filePathRelative":"Notability/python/7.dictionary.md","localizedDate":"2024年4月20日","excerpt":"<h2>1. 如何构建一个电话薄</h2>\\n<p>我们有以下联系人：</p>\\n<table>\\n<thead>\\n<tr>\\n<th>姓名</th>\\n<th>手机号</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>李雷</td>\\n<td>123456</td>\\n</tr>\\n<tr>\\n<td>韩梅梅</td>\\n<td>132456</td>\\n</tr>\\n<tr>\\n<td>大卫</td>\\n<td>154389</td>\\n</tr>\\n<tr>\\n<td>Mr.Liu</td>\\n<td>131452</td>\\n</tr>\\n<tr>\\n<td>Bornforthis</td>\\n<td>180595</td>\\n</tr>\\n<tr>\\n<td>Alexa</td>\\n<td>131559</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{f as comp,T as data};
