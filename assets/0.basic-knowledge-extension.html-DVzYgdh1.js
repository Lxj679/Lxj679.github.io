import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as t}from"./app-BWU-13wx.js";const e="/assets/b0d64ef3132b812987b53452acc1f87-va11uNag.png",p={},o=t('<h2 id="_1-基本语法元素" tabindex="-1"><a class="header-anchor" href="#_1-基本语法元素"><span>1. 基本语法元素</span></a></h2><h3 id="_1-1-格式化输出" tabindex="-1"><a class="header-anchor" href="#_1-1-格式化输出"><span>1.1 格式化输出</span></a></h3><img src="'+e+`" alt="format的格式" style="zoom:33%;"><ol><li><strong>填充输出</strong></li></ol><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># 右对齐</span>
a <span class="token operator">=</span> <span class="token number">123</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;{0:_&gt;4}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># _123</span>
b <span class="token operator">=</span> <span class="token number">1111</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;{0:&amp;&gt;10}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># &amp;&amp;&amp;&amp;&amp;&amp;1111</span>
<span class="token comment"># 左对齐</span>
a <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;{0:*&lt;5}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># a****</span>
<span class="token comment"># 居中</span>
a <span class="token operator">=</span> <span class="token string">&#39;middle&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;{0:#^16}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># #####middle#####</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;{0:#^15}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># ####middle#####</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;{0:#^17}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># #####middle######</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><strong>数字千分位分隔符</strong></li></ol><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># 显示1,000,000</span>
a <span class="token operator">=</span> <span class="token number">1000000</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;{0:,}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 1,000,000</span>

<span class="token comment"># 填充优先级高于千分位</span>
a <span class="token operator">=</span> <span class="token number">1000000</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;{0:*&gt;20,}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># ***********1,000,000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><strong>浮点数简化输出</strong></li></ol><ul><li>留两位小数</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">3.1415926</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;{0:.2f}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 3.14</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>按百分数输出</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">3.1415926</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;{0:%}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 314.159260%</span>


a <span class="token operator">=</span> <span class="token number">3.1415926</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;{0:.1%}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 314.2%</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>科学计数法输出</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">0.1415926</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;{0:e}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 1.415926e-01</span>


a <span class="token operator">=</span> <span class="token number">0.0000926</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;{0:.2e}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 9.26e-05</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li><strong>整数的进制转换输出</strong></li></ol><ul><li>十进制整数转二进制、unicode码、十进制、八进制、十六进制输出</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;二进制{0:b}, Unicode码{0:c}, 十进制{0:d}, 八进制{0:o}, 十六进制{0:x}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token number">450</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># output: 二进制111000010, Unicode码ǂ, 十进制450, 八进制702, 十六进制1c2 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-程序格式" tabindex="-1"><a class="header-anchor" href="#_1-2-程序格式"><span>1.2 程序格式</span></a></h3><h4 id="_1-最大行长度" tabindex="-1"><a class="header-anchor" href="#_1-最大行长度"><span>1. 最大行长度</span></a></h4><p>所有行限制的最大字符数为 79</p><h4 id="_2-缩进" tabindex="-1"><a class="header-anchor" href="#_2-缩进"><span>2. 缩进</span></a></h4><ul><li>用缩进来表示语句间的逻辑</li><li>在 for while if def class等:之后下一行开始进行缩进，表明后续代码与前句之间的从属关系</li><li>缩进量:4字符</li></ul><h4 id="_3-使用空格" tabindex="-1"><a class="header-anchor" href="#_3-使用空格"><span>3.使用空格</span></a></h4><ul><li>二元运算符两边加一个加空格</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>x <span class="token operator">=</span> <span class="token number">2</span>
x <span class="token operator">+=</span> <span class="token number">4</span>
<span class="token number">6</span> <span class="token operator">&gt;</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用不同优先级的运算符，考虑在最低优先级的运算符周围添加空格</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>x <span class="token operator">=</span> x<span class="token operator">*</span><span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span>
z <span class="token operator">=</span> x<span class="token operator">*</span><span class="token number">2</span> <span class="token operator">+</span> y<span class="token operator">*</span>y
c <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">+</span>b<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>a<span class="token operator">-</span>b<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在逗号后使用空格</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>x<span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span>
ls <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>不要使用一个以上的空格</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>x <span class="token operator">=</span>             <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4-避免使用空格" tabindex="-1"><a class="header-anchor" href="#_4-避免使用空格"><span>4. 避免使用空格</span></a></h4><ul><li>在指定关键字参数或者默认参数值的时候，不要在 = 附近加上空格</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">fun</span><span class="token punctuation">(</span>n<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> m<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    pritn<span class="token punctuation">(</span>n<span class="token punctuation">,</span> m<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结：</span></a></h4><ol><li><strong>以上属于PEP8格式指南的部分内容，养成良好的编码规范利人利己</strong></li><li><strong>格式约定的目的:</strong><ol><li>使大量Python代码风格一致</li><li>提升代码可读性</li></ol></li><li><strong>尽信书不如无书，不应死板教条的执行格式规范</strong><ol><li>项目规范优先</li><li></li></ol></li></ol>`,36),l=[o];function i(c,u){return s(),a("div",null,l)}const k=n(p,[["render",i],["__file","0.basic-knowledge-extension.html.vue"]]),m=JSON.parse(`{"path":"/Notability/python/0.basic-knowledge-extension.html","title":"basic knowledge extension for Python","lang":"zh-CN","frontmatter":{"title":"basic knowledge extension for Python","date":"2024-04-18T07:51:22.000Z","isOriginal":true,"category":["python"],"tag":["python","编程","教程"],"icon":"python","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"editLink":true,"backToTop":true,"toc":true,"description":"1. 基本语法元素 1.1 格式化输出 format的格式 填充输出 数字千分位分隔符 浮点数简化输出 留两位小数 按百分数输出 科学计数法输出 整数的进制转换输出 十进制整数转二进制、unicode码、十进制、八进制、十六进制输出 1.2 程序格式 1. 最大行长度 所有行限制的最大字符数为 79 2. 缩进 用缩进来表示语句间的逻辑 在 for w...","head":[["meta",{"property":"og:url","content":"https://dailyrecord4ryan.com/Notability/python/0.basic-knowledge-extension.html"}],["meta",{"property":"og:site_name","content":"Website of Ryan"}],["meta",{"property":"og:title","content":"basic knowledge extension for Python"}],["meta",{"property":"og:description","content":"1. 基本语法元素 1.1 格式化输出 format的格式 填充输出 数字千分位分隔符 浮点数简化输出 留两位小数 按百分数输出 科学计数法输出 整数的进制转换输出 十进制整数转二进制、unicode码、十进制、八进制、十六进制输出 1.2 程序格式 1. 最大行长度 所有行限制的最大字符数为 79 2. 缩进 用缩进来表示语句间的逻辑 在 for w..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-18T08:17:06.000Z"}],["meta",{"property":"article:author","content":"Ryan"}],["meta",{"property":"article:tag","content":"python"}],["meta",{"property":"article:tag","content":"编程"}],["meta",{"property":"article:tag","content":"教程"}],["meta",{"property":"article:published_time","content":"2024-04-18T07:51:22.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-18T08:17:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"basic knowledge extension for Python\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-18T07:51:22.000Z\\",\\"dateModified\\":\\"2024-04-18T08:17:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan\\",\\"url\\":\\"https://dailyrecord4ryan.com\\"}]}"]]},"headers":[{"level":2,"title":"1. 基本语法元素","slug":"_1-基本语法元素","link":"#_1-基本语法元素","children":[{"level":3,"title":"1.1 格式化输出","slug":"_1-1-格式化输出","link":"#_1-1-格式化输出","children":[]},{"level":3,"title":"1.2 程序格式","slug":"_1-2-程序格式","link":"#_1-2-程序格式","children":[{"level":4,"title":"1. 最大行长度","slug":"_1-最大行长度","link":"#_1-最大行长度","children":[]},{"level":4,"title":"2. 缩进","slug":"_2-缩进","link":"#_2-缩进","children":[]},{"level":4,"title":"3.使用空格","slug":"_3-使用空格","link":"#_3-使用空格","children":[]},{"level":4,"title":"4. 避免使用空格","slug":"_4-避免使用空格","link":"#_4-避免使用空格","children":[]},{"level":4,"title":"小结：","slug":"小结","link":"#小结","children":[]}]}]}],"git":{"createdTime":1713397939000,"updatedTime":1713428226000,"contributors":[{"name":"Lxj679","email":"2944170474@qq.com","commits":7}]},"readingTime":{"minutes":2.14,"words":643},"filePathRelative":"Notability/python/0.basic-knowledge-extension.md","localizedDate":"2024年4月18日","excerpt":"<h2>1. 基本语法元素</h2>\\n<h3>1.1 格式化输出</h3>\\n\\n<ol>\\n<li><strong>填充输出</strong></li>\\n</ol>\\n<div class=\\"language-python\\" data-ext=\\"py\\" data-title=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token comment\\"># 右对齐</span>\\na <span class=\\"token operator\\">=</span> <span class=\\"token number\\">123</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'{0:_&gt;4}'</span><span class=\\"token punctuation\\">.</span><span class=\\"token builtin\\">format</span><span class=\\"token punctuation\\">(</span>a<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\"># _123</span>\\nb <span class=\\"token operator\\">=</span> <span class=\\"token number\\">1111</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'{0:&amp;&gt;10}'</span><span class=\\"token punctuation\\">.</span><span class=\\"token builtin\\">format</span><span class=\\"token punctuation\\">(</span>b<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\"># &amp;&amp;&amp;&amp;&amp;&amp;1111</span>\\n<span class=\\"token comment\\"># 左对齐</span>\\na <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'a'</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'{0:*&lt;5}'</span><span class=\\"token punctuation\\">.</span><span class=\\"token builtin\\">format</span><span class=\\"token punctuation\\">(</span>a<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\"># a****</span>\\n<span class=\\"token comment\\"># 居中</span>\\na <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'middle'</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'{0:#^16}'</span><span class=\\"token punctuation\\">.</span><span class=\\"token builtin\\">format</span><span class=\\"token punctuation\\">(</span>a<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\"># #####middle#####</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'{0:#^15}'</span><span class=\\"token punctuation\\">.</span><span class=\\"token builtin\\">format</span><span class=\\"token punctuation\\">(</span>a<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\"># ####middle#####</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'{0:#^17}'</span><span class=\\"token punctuation\\">.</span><span class=\\"token builtin\\">format</span><span class=\\"token punctuation\\">(</span>a<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\"># #####middle######</span>\\n</code></pre></div>","autoDesc":true}`);export{k as comp,m as data};