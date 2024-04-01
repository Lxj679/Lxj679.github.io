import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as c,c as r,b as n,e as d,w as a,a as i,d as s}from"./app-oR9C-O0E.js";const u="/assets/a4034a755a9502dce168bbee003b2cc-Cg6aEPGn.png",v="/assets/image-20240330103546007-6h6a9PZ2.png",m="/assets/335f4c5bd1b8f0691d46b6f2264a080-BKJBV_kA.png",k="/assets/022b9d9a5bd65c1c506370fb1ddcf56-M6v53vR_.png",b={},g=i('<h2 id="_1-字符串的定义" tabindex="-1"><a class="header-anchor" href="#_1-字符串的定义"><span>1. 字符串的定义</span></a></h2><p>字符串是由字母、数字和特殊字符来组成的序列</p><figure><img src="'+u+`" alt="a4034a755a9502dce168bbee003b2cc" tabindex="0" loading="lazy"><figcaption>a4034a755a9502dce168bbee003b2cc</figcaption></figure><h2 id="_2-创建字符串" tabindex="-1"><a class="header-anchor" href="#_2-创建字符串"><span>2. 创建字符串</span></a></h2><p>如何创建字符串？</p><p>————使用 <strong><span style="color:orange;"> 单引号、双引号</span></strong> 或者 <strong><span style="color:orange;"> 三引号</span></strong> 。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>name <span class="token operator">=</span> <span class="token string">&#39;ryan&#39;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),h=i(`<p>有时候我们需要字符串里面有单引号或双引号，此时发挥作用：**<span style="color:orange;">单双引号混用，是第一个原因</span>**那么三引号呢？ 假设我们现在需要存储如下文本：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>放入字符串，我们如何在Python代码实现呢？</p>`,3),y=n("div",{class:"language-python line-numbers-mode","data-ext":"py","data-title":"py"},[n("pre",{class:"language-python"},[n("code",null,[s("string1 "),n("span",{class:"token operator"},"="),s(` '我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西'
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("string1"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"#output"),s(`
  File `),n("span",{class:"token string"},'"C:\\Users\\Administrator\\PycharmProjects\\Coder\\Python\\code4.py"'),n("span",{class:"token punctuation"},","),s(" line "),n("span",{class:"token number"},"26"),s(`
    string1 `),n("span",{class:"token operator"},"="),s(` '我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创
                                                                                                                                `),n("span",{class:"token operator"},"^"),s(`
SyntaxError`),n("span",{class:"token punctuation"},":"),s(" EOL "),n("span",{class:"token keyword"},"while"),s(` scanning string literal
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-python line-numbers-mode","data-ext":"py","data-title":"py"},[n("pre",{class:"language-python"},[n("code",null,[s("string1 "),n("span",{class:"token operator"},"="),s(` "我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西"
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("string1"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"#output"),s(`
  File `),n("span",{class:"token string"},'"C:\\Users\\Administrator\\PycharmProjects\\Coder\\Python\\code4.py"'),n("span",{class:"token punctuation"},","),s(" line "),n("span",{class:"token number"},"26"),s(`
    string1 `),n("span",{class:"token operator"},"="),s(` "我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创
                                                                                                                                `),n("span",{class:"token operator"},"^"),s(`
SyntaxError`),n("span",{class:"token punctuation"},":"),s(" EOL "),n("span",{class:"token keyword"},"while"),s(` scanning string literal
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("li",null,[n("p",null,"由此可见，如果直接使用单引号或者双引号会出现报错，当然我们可以在每一行包括无文本的空行的后面加上‘\\’（此效果会将所有行拼接在一起）")],-1),q=i(`<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string1 <span class="token operator">=</span> &#39;我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创\\
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通常，我们还可以使用三引号测试：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string1 <span class="token operator">=</span> <span class="token triple-quoted-string string">&#39;&#39;&#39;我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西&#39;&#39;&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string1<span class="token punctuation">)</span>
<span class="token comment"># output </span>

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以从上面的输出可知，原本什么格式，输出就是什么格式。（原样输出）（三个双引号的效果也是一样的）</p><ul><li><p><strong><span style="color:orange;">三个单引号或者双引号，实现原样输出。</span></strong></p></li><li><p><strong><span style="color:orange;"> 多行注释 </span></strong></p></li><li><p><strong><span style="color:orange;">单双三引号混用</span></strong>（代码略）</p></li></ul><figure><img src="`+v+`" alt="多行注释的方法" tabindex="0" loading="lazy"><figcaption>多行注释的方法</figcaption></figure><h2 id="_3-字符串长度" tabindex="-1"><a class="header-anchor" href="#_3-字符串长度"><span>3. 字符串长度</span></a></h2><p>如何获取一个字符串的长度呢？————使用<code>len()</code></p><p><code>len()</code>：返回字符串中字符长度或者字符数。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>paragraph <span class="token operator">=</span> <span class="token string">&#39;Hello, ryan.&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>paragraph<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token number">12</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在使用len获取字符串长度时，是从数字1开始数的。</p><h2 id="_4-字符串中的字符获取" tabindex="-1"><a class="header-anchor" href="#_4-字符串中的字符获取"><span>4. 字符串中的字符获取</span></a></h2><h3 id="_4-1-获取单个字符" tabindex="-1"><a class="header-anchor" href="#_4-1-获取单个字符"><span>4.1 获取单个字符</span></a></h3><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&#39;dailyrecord4ryan&#39;</span>
<span class="token comment"># 获取字符 d</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

<span class="token comment"># 提取 y</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

<span class="token comment"># n (使用三种方法实现）</span>
select1 <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">]</span>
select2 <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token builtin">len</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
select3 <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select1<span class="token punctuation">,</span> select2<span class="token punctuation">,</span> select3<span class="token punctuation">)</span>

<span class="token comment"># output</span>

d
y
n n n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-获取多个连续字符-子字符串" tabindex="-1"><a class="header-anchor" href="#_4-2-获取多个连续字符-子字符串"><span>4.2 获取多个连续字符（子字符串）</span></a></h3><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&#39;dailyrecord4ryan&#39;</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;

语法：string = &#39;dailyrecord4ryan&#39;
     select = string[start: end]
     PS: end 记得 +1
&quot;&quot;&quot;</span>

<span class="token comment"># 获取字符 daily</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token comment"># dail</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token comment"># daily</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

<span class="token comment"># 提取 record</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">:</span><span class="token number">11</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

<span class="token comment"># 提取ryan</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">:</span><span class="token number">16</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

<span class="token comment"># output</span>
daily
record
ryan
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-获取多个不连续的字符" tabindex="-1"><a class="header-anchor" href="#_4-3-获取多个不连续的字符"><span>4.3 获取多个不连续的字符</span></a></h3><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&#39;0123456789&#39;</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
语法：string = &#39;0123456789&#39;
select = string[start: end: sep]
PS: end 记得 +1 
&quot;&quot;&quot;</span>

<span class="token comment"># 获取字符 02468</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token builtin">len</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

<span class="token comment"># 提取 13579</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token builtin">len</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>


string1 <span class="token operator">=</span> <span class="token string">&#39;bornforthis&#39;</span>
<span class="token comment"># 提取 bnri</span>
select <span class="token operator">=</span> string1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token builtin">len</span><span class="token punctuation">(</span>string1<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

<span class="token comment"># 提取 ofts</span>
select <span class="token operator">=</span> string1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token builtin">len</span><span class="token punctuation">(</span>string1<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token number">02468</span>
<span class="token number">13579</span>
bnri
ofts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-优化" tabindex="-1"><a class="header-anchor" href="#_4-4-优化"><span>4.4 优化</span></a></h3><p>如果我们要提取的字符是从字符从开头到结尾，则我们可以省略开头和结尾，留空即可。</p><p>所以4.3小节的代码可以等价于如下代码：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&#39;0123456789&#39;</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;

语法：string = &quot;0123456789&quot;
select = string[::sep]
PS: end 记得 +1

&quot;&quot;&quot;</span>

select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token comment"># 取偶数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token comment"># 取奇数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>


string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>

select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token comment"># 提取 bnri</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token comment"># 提取 ofts</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-字符串的倒序" tabindex="-1"><a class="header-anchor" href="#_4-5-字符串的倒序"><span>4.5 字符串的倒序</span></a></h3><h3 id="_4-5-1-实现" tabindex="-1"><a class="header-anchor" href="#_4-5-1-实现"><span>4.5.1 实现</span></a></h3><p>字符串的第三个位置，控制的是字符提取的方向。默认为正数1，如果我们想把字符串进行反转操作，我们可以改成-1，则我们可以将字符串从倒序第一的位置（-1）进行反方向输出</p><p>::: tips</p><p>正负控制方向，数字大小控制步长。</p><p>:::</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
reverse <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>reverse<span class="token punctuation">)</span>

<span class="token comment"># output</span>
sihtrofnrob
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-2-存" tabindex="-1"><a class="header-anchor" href="#_4-5-2-存"><span>4.5.2 存</span></a></h3><p>在的bug</p><div class="hint-container warning"><p class="hint-container-title">思考</p><p>上面代码<code>string[::-1]</code>前两位省略了啥数字？尝试填上去</p></div><p>你有可能会写：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>

reverse <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">11</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>reverse<span class="token punctuation">)</span>

<span class="token comment"># output</span>
没有结果
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然而既没有报错也没有输出结果，这是为什么？</p><figure><img src="`+m+`" alt="两者的方向错了" tabindex="0" loading="lazy"><figcaption>两者的方向错了</figcaption></figure><p>那么应该怎么办呢？</p><h3 id="_4-5-3-解决方法" tabindex="-1"><a class="header-anchor" href="#_4-5-3-解决方法"><span>4.5.3 解决方法</span></a></h3><ol><li>方法一：调换位置</li></ol><p>先思考存在什么问题？————少了一个字符</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>

reverse <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>reverse<span class="token punctuation">)</span>

<span class="token comment"># output</span>
sihtrofnro
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为什么少了一个字符？</p><p>————存在一个bug，因为结束是0，但是字符获取操作([::])中的第一个和第二个位置分别为“左闭右开“，也就是说要想覆盖到0位置，中间的数字必须是0左边一个数字也就是-1，然而-1却又是最右边的位置，这样固然是不行的。</p><p>难道我们只能不写第二个位置，得到完整的倒序字符？————<code>reverse = string[11::-1]</code></p><p>这显然没有解决我们刚刚提出的问————前两位省略了啥数字？</p><ol start="2"><li>方法二：重新开始结尾</li></ol><p>重新写开始结尾</p><p>想想字符串的有序性，从右到左。</p><p>至于为什么要纠结前两个空的数字是什么————之后可能只要提取字符串的一部分</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>

reverse <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">12</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>reverse<span class="token punctuation">)</span>

<span class="token comment"># output</span>
sihtrofnrob
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+k+'" alt="022b9d9a5bd65c1c506370fb1ddcf56" tabindex="0" loading="lazy"><figcaption>022b9d9a5bd65c1c506370fb1ddcf56</figcaption></figure><p>小试牛刀： 获取 rofn</p>',52);function x(w,A){const p=o("CodeTabs");return c(),r("div",null,[g,n("ul",null,[n("li",null,[h,d(p,{id:"43",data:[{id:"单引号"},{id:"双引号"}]},{title0:a(({value:e,isActive:t})=>[s("单引号")]),title1:a(({value:e,isActive:t})=>[s("双引号")]),tab0:a(({value:e,isActive:t})=>[y]),tab1:a(({value:e,isActive:t})=>[_]),_:1})]),f]),q])}const N=l(b,[["render",x],["__file","4.str-Notebook.html.vue"]]),T=JSON.parse(`{"path":"/Notability/python/4.str-Notebook.html","title":"str Notebook","lang":"zh-CN","frontmatter":{"title":"str Notebook","date":"2024-03-29T15:25:42.000Z","isOriginal":true,"category":["python"],"tag":["python","编程","教程"],"icon":"python","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"editLink":true,"backToTop":true,"toc":true,"description":"1. 字符串的定义 字符串是由字母、数字和特殊字符来组成的序列 a4034a755a9502dce168bbee003b2cca4034a755a9502dce168bbee003b2cc 2. 创建字符串 如何创建字符串？ ————使用 单引号、双引号 或者 三引号 。 为什么Python同时支持三种创建字符串的方法 但是英文当中可以缩写如下： 因为...","head":[["meta",{"property":"og:url","content":"https://dailyrecord4ryan.com/Notability/python/4.str-Notebook.html"}],["meta",{"property":"og:site_name","content":"Website of Ryan"}],["meta",{"property":"og:title","content":"str Notebook"}],["meta",{"property":"og:description","content":"1. 字符串的定义 字符串是由字母、数字和特殊字符来组成的序列 a4034a755a9502dce168bbee003b2cca4034a755a9502dce168bbee003b2cc 2. 创建字符串 如何创建字符串？ ————使用 单引号、双引号 或者 三引号 。 为什么Python同时支持三种创建字符串的方法 但是英文当中可以缩写如下： 因为..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-01T04:57:26.000Z"}],["meta",{"property":"article:author","content":"Ryan"}],["meta",{"property":"article:tag","content":"python"}],["meta",{"property":"article:tag","content":"编程"}],["meta",{"property":"article:tag","content":"教程"}],["meta",{"property":"article:published_time","content":"2024-03-29T15:25:42.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-01T04:57:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"str Notebook\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-29T15:25:42.000Z\\",\\"dateModified\\":\\"2024-04-01T04:57:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan\\",\\"url\\":\\"https://dailyrecord4ryan.com\\"}]}"]]},"headers":[{"level":2,"title":"1. 字符串的定义","slug":"_1-字符串的定义","link":"#_1-字符串的定义","children":[]},{"level":2,"title":"2. 创建字符串","slug":"_2-创建字符串","link":"#_2-创建字符串","children":[]},{"level":2,"title":"3. 字符串长度","slug":"_3-字符串长度","link":"#_3-字符串长度","children":[]},{"level":2,"title":"4. 字符串中的字符获取","slug":"_4-字符串中的字符获取","link":"#_4-字符串中的字符获取","children":[{"level":3,"title":"4.1 获取单个字符","slug":"_4-1-获取单个字符","link":"#_4-1-获取单个字符","children":[]},{"level":3,"title":"4.2 获取多个连续字符（子字符串）","slug":"_4-2-获取多个连续字符-子字符串","link":"#_4-2-获取多个连续字符-子字符串","children":[]},{"level":3,"title":"4.3 获取多个不连续的字符","slug":"_4-3-获取多个不连续的字符","link":"#_4-3-获取多个不连续的字符","children":[]},{"level":3,"title":"4.4 优化","slug":"_4-4-优化","link":"#_4-4-优化","children":[]},{"level":3,"title":"4.5  字符串的倒序","slug":"_4-5-字符串的倒序","link":"#_4-5-字符串的倒序","children":[]},{"level":3,"title":"4.5.1 实现","slug":"_4-5-1-实现","link":"#_4-5-1-实现","children":[]},{"level":3,"title":"4.5.2 存","slug":"_4-5-2-存","link":"#_4-5-2-存","children":[]},{"level":3,"title":"4.5.3 解决方法","slug":"_4-5-3-解决方法","link":"#_4-5-3-解决方法","children":[]}]}],"git":{"createdTime":1711698165000,"updatedTime":1711947446000,"contributors":[{"name":"Lxj679","email":"2944170474@qq.com","commits":12}]},"readingTime":{"minutes":8.68,"words":2603},"filePathRelative":"Notability/python/4.str-Notebook.md","localizedDate":"2024年3月29日","excerpt":"<h2>1. 字符串的定义</h2>\\n<p>字符串是由字母、数字和特殊字符来组成的序列</p>\\n<figure><figcaption>a4034a755a9502dce168bbee003b2cc</figcaption></figure>\\n<h2>2. 创建字符串</h2>\\n<p>如何创建字符串？</p>\\n<p>————使用 <strong><span style=\\"color : orange\\"> 单引号、双引号</span></strong> 或者 <strong><span style=\\"color : orange\\"> 三引号</span></strong> 。</p>\\n<div class=\\"language-python\\" data-ext=\\"py\\" data-title=\\"py\\"><pre class=\\"language-python\\"><code>name <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'ryan'</span>\\nnumber <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'8'</span>\\nparagraph <span class=\\"token operator\\">=</span> <span class=\\"token triple-quoted-string string\\">'''hello, ryan.\\nnice to meet u'''</span>\\nparagraph_two  <span class=\\"token operator\\">=</span> <span class=\\"token triple-quoted-string string\\">\\"\\"\\"Hi, ryan\\nnice to meet u 2\\"\\"\\"</span>\\n</code></pre></div>","autoDesc":true}`);export{N as comp,T as data};
