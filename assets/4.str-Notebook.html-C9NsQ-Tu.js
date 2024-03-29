import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as e}from"./app-C3juCOy_.js";const t="/assets/a4034a755a9502dce168bbee003b2cc-Cg6aEPGn.png",i={},o=e('<h2 id="_1-字符串的定义" tabindex="-1"><a class="header-anchor" href="#_1-字符串的定义"><span>1. 字符串的定义</span></a></h2><p>字符串是由字母、数字和特殊字符来组成的序列</p><figure><img src="'+t+`" alt="a4034a755a9502dce168bbee003b2cc" tabindex="0" loading="lazy"><figcaption>a4034a755a9502dce168bbee003b2cc</figcaption></figure><h2 id="_2-创建字符串" tabindex="-1"><a class="header-anchor" href="#_2-创建字符串"><span>2. 创建字符串</span></a></h2><p>如何创建字符串？</p><p>————使用**<span style="color:orange;"> 单引号、双引号</span><strong>或者</strong><span style="color:orange;"> 三引号</span>**。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>name <span class="token operator">=</span> <span class="token string">&#39;ryan&#39;</span>
number <span class="token operator">=</span> <span class="token string">&#39;8&#39;</span>
paragraph <span class="token operator">=</span> <span class="token triple-quoted-string string">&#39;&#39;&#39;hello, ryan.
nice to meet u&#39;&#39;&#39;</span>
paragraph_two  <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;Hi, ryan
nice to meet u 2&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为什么Python同时支持三种创建字符串的方法</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&#39;I am Ryan&#39;</span> <span class="token comment"># 在英文中的常规表达式</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但是英文当中可以缩写如下：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&#39;I&#39;</span>m Ryan<span class="token punctuation">.</span>&#39; <span class="token comment"># 在英文中的也可以如此缩写</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>

<span class="token comment"># output</span>
  File <span class="token string">&quot;C:\\Users\\Administrator\\PycharmProjects\\Coder\\Python\\code4.py&quot;</span><span class="token punctuation">,</span> line <span class="token number">11</span>
    string <span class="token operator">=</span> <span class="token string">&#39;I&#39;</span>m Ryan<span class="token punctuation">.</span>&#39; <span class="token comment"># 在英文中的也可以如此缩写</span>
                <span class="token operator">^</span>
SyntaxError<span class="token punctuation">:</span> invalid syntax
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为，开头是单引号，所以Python会寻找到下一个第一次出现的单引号进行匹配。而第一个单引号在字符串的末尾，所以导致整个字符串异常。（完全没有博爱过字符串全部内容）</p><p>如何解决上面描述的问题呢？——使用双引号。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;I&#39;m Ryan.&quot;</span> <span class="token comment"># 外面使用双引号包裹即可</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>

<span class="token comment"># output</span>
I&#39;m Ryan<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>有时候我们需要字符串里面有单引号或双引号，此时发挥作用：**<span style="color:orange;">单双引号混用，是第一个原因</span>**那么三引号呢？ 假设我们现在需要存储如下文本：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>放入字符串，我们如何在Python代码实现呢？</p><p>::: tabs-code</p><p>@tab 单引号</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string1 <span class="token operator">=</span> &#39;我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西&#39;
<span class="token keyword">print</span><span class="token punctuation">(</span>string1<span class="token punctuation">)</span>

<span class="token comment">#output</span>
  File <span class="token string">&quot;C:\\Users\\Administrator\\PycharmProjects\\Coder\\Python\\code4.py&quot;</span><span class="token punctuation">,</span> line <span class="token number">26</span>
    string1 <span class="token operator">=</span> &#39;我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创
                                                                                                                                <span class="token operator">^</span>
SyntaxError<span class="token punctuation">:</span> EOL <span class="token keyword">while</span> scanning string literal
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@tab 双引号</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string1 <span class="token operator">=</span> &quot;我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西&quot;
<span class="token keyword">print</span><span class="token punctuation">(</span>string1<span class="token punctuation">)</span>

<span class="token comment">#output</span>
  File <span class="token string">&quot;C:\\Users\\Administrator\\PycharmProjects\\Coder\\Python\\code4.py&quot;</span><span class="token punctuation">,</span> line <span class="token number">26</span>
    string1 <span class="token operator">=</span> &quot;我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创
                                                                                                                                <span class="token operator">^</span>
SyntaxError<span class="token punctuation">:</span> EOL <span class="token keyword">while</span> scanning string literal
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p></li><li><p>由此可见，如果直接使用单引号或者双引号会出现报错，当然我们可以在每一行包括无文本的空行的后面加上‘\\’（此效果会将所有行拼接在一起）</p></li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string1 <span class="token operator">=</span> &#39;我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创\\
\\
浅者见浅，深者见深——黄家宝\\
\\
起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。\\
\\
先实现功能，再去优化，否则一切会很乱。——AI悦创\\
\\
凡是你不能清晰写下来的东西，都是你还没有真正理解的东西&#39;<span class="token comment">#引号这行不用加反斜杠</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string1<span class="token punctuation">)</span>

<span class="token comment"># output</span>
我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创浅者见浅，深者见深——黄家宝起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。先实现功能，再去优化，否则一切会很乱。——AI悦创凡是你不能清晰写下来的东西，都是你还没有真正理解的东西
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),l=[o];function r(p,c){return s(),a("div",null,l)}const m=n(i,[["render",r],["__file","4.str-Notebook.html.vue"]]),v=JSON.parse(`{"path":"/Notability/python/4.str-Notebook.html","title":"str Notebook","lang":"zh-CN","frontmatter":{"title":"str Notebook","date":"2024-03-29T15:25:42.000Z","isOriginal":true,"category":["python"],"tag":["python","编程","教程"],"icon":"python","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"editLink":true,"backToTop":true,"toc":true,"description":"1. 字符串的定义 字符串是由字母、数字和特殊字符来组成的序列 a4034a755a9502dce168bbee003b2cca4034a755a9502dce168bbee003b2cc 2. 创建字符串 如何创建字符串？ ————使用** 单引号、双引号或者 三引号**。 为什么Python同时支持三种创建字符串的方法 但是英文当中可以缩写如下： ...","head":[["meta",{"property":"og:url","content":"https://dailyrecord4ryan.com/Notability/python/4.str-Notebook.html"}],["meta",{"property":"og:site_name","content":"Website of Ryan"}],["meta",{"property":"og:title","content":"str Notebook"}],["meta",{"property":"og:description","content":"1. 字符串的定义 字符串是由字母、数字和特殊字符来组成的序列 a4034a755a9502dce168bbee003b2cca4034a755a9502dce168bbee003b2cc 2. 创建字符串 如何创建字符串？ ————使用** 单引号、双引号或者 三引号**。 为什么Python同时支持三种创建字符串的方法 但是英文当中可以缩写如下： ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-29T07:59:31.000Z"}],["meta",{"property":"article:author","content":"Ryan"}],["meta",{"property":"article:tag","content":"python"}],["meta",{"property":"article:tag","content":"编程"}],["meta",{"property":"article:tag","content":"教程"}],["meta",{"property":"article:published_time","content":"2024-03-29T15:25:42.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-29T07:59:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"str Notebook\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-29T15:25:42.000Z\\",\\"dateModified\\":\\"2024-03-29T07:59:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan\\",\\"url\\":\\"https://dailyrecord4ryan.com\\"}]}"]]},"headers":[{"level":2,"title":"1. 字符串的定义","slug":"_1-字符串的定义","link":"#_1-字符串的定义","children":[]},{"level":2,"title":"2. 创建字符串","slug":"_2-创建字符串","link":"#_2-创建字符串","children":[]}],"git":{"createdTime":1711698165000,"updatedTime":1711699171000,"contributors":[{"name":"Lxj679","email":"2944170474@qq.com","commits":2}]},"readingTime":{"minutes":4.55,"words":1365},"filePathRelative":"Notability/python/4.str-Notebook.md","localizedDate":"2024年3月29日","excerpt":"<h2>1. 字符串的定义</h2>\\n<p>字符串是由字母、数字和特殊字符来组成的序列</p>\\n<figure><figcaption>a4034a755a9502dce168bbee003b2cc</figcaption></figure>\\n<h2>2. 创建字符串</h2>\\n<p>如何创建字符串？</p>\\n<p>————使用**<span style=\\"color : orange\\"> 单引号、双引号</span><strong>或者</strong><span style=\\"color : orange\\"> 三引号</span>**。</p>\\n<div class=\\"language-python\\" data-ext=\\"py\\" data-title=\\"py\\"><pre class=\\"language-python\\"><code>name <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'ryan'</span>\\nnumber <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'8'</span>\\nparagraph <span class=\\"token operator\\">=</span> <span class=\\"token triple-quoted-string string\\">'''hello, ryan.\\nnice to meet u'''</span>\\nparagraph_two  <span class=\\"token operator\\">=</span> <span class=\\"token triple-quoted-string string\\">\\"\\"\\"Hi, ryan\\nnice to meet u 2\\"\\"\\"</span>\\n</code></pre></div>","autoDesc":true}`);export{m as comp,v as data};
