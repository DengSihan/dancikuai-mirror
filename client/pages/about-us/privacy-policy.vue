<template>
	<main>

		<heading>
			<i class="mdi mdi-account-lock-outline text-4xl pr-4"></i>
			{{ $t('privacy_policy').toCapitalizePhrases() }}
		</heading>

		<div v-if="$i18n.locale !== default_locale"
			class="my-8 p-3 border rounded-sm bg-gray-2 flex justify-between">
			<span>
				{{ $t('machine_translated_alert') }}
			</span>
			<a href="https://docs.qq.com/doc/DZklUcUVyRE1neFFm"
				target="blank"
				class="no-underline hover:underline font-semibold" 
				:title="$t('original_copy')">
				{{ $t('original_copy').toCapitalizePhrases() }}
			</a>
		</div>
		
		<blockquote v-if="$i18n.locale === 'zh-CN'">
			<p class="text-indent">
				<i>单词块</i> 应用是由 重庆相对科技有限公司 公司（以下简称“重庆相对科技有限公司”）为您提供的一款背单词产品。重庆相对科技有限公司公司十分尊重您的个人信息和数据，并会尽全力保护您的个人信息和数据的安全可靠。本政策仅适用于 <i>单词块</i> 应用收集和存储的用户信息和数据。
			</p>

			<p class="text-indent">
				请在使用 <i>单词块</i> 应用前，务必仔细阅读并了解和同意《<i>单词块</i> 应用的隐私政策》。该政策规定了您在使用 <i>单词块</i> 应用时我们将如何收集、使用、披露、处理和保护您提供给我们的信息。如果我们需要您提供某些信息用于在使用该产品时验证您的身份、以及向我们的第三方服务供应商连接服务时，我们会严格遵守该隐私政策来使用这些信息。如果您已经开始使用 <i>单词块</i>应用，就表示您已经阅读、许可并接受该隐私政策中所描述的所有条款，以及我们今后随时做出的任何变更。
			</p>

			<p class="text-indent">
				《<i>单词块</i>》尊重并保护所有使用服务用户的个人隐私权。为了给您提供更准确、更有个性化的服务，《<i>单词块</i>》会按照本隐私权政策的规定使用和披露您的个人信息。但《<i>单词块</i>》将以高度的勤勉、审慎义务对待这些信息。除本隐私权政策另有规定外，在未征得您事先许可的情况下，《<i>单词块</i>》不会将这些信息对外披露或向第三方提供。《<i>单词块</i>》会不时更新本隐私权政策。 您在同意《<i>单词块</i>》服务使用协议之时，即视为您已经同意本隐私权政策全部内容。本隐私权政策属于《<i>单词块</i>》服务使用协议不可分割的一部分。
			</p>

			<ol type="1">
				<li>
					<h3>
						适用范围
					</h3>
					<p>
						<ol type="a">
							<li>
								在您注册《<i>单词块</i>》帐号时，您根据《<i>单词块</i>》要求提供的个人注册信息；
							</li>
							<li>
								在您使用《<i>单词块</i>》网络服务，或访问《<i>单词块</i>》网页时，《<i>单词块</i>》自动接收并记录的您的浏览器和计算机上的信息，包括但不限于您的IP地址、浏览器的类型、使用的语言、访问日期和时间、软硬件特征信息及您需求的网页记录等数据；
							</li>
							<li>
								《<i>单词块</i>》通过合法途径从商业伙伴处取得的用户个人数据。
							</li>
						</ol>

						<p>
							您了解并同意，以下信息不适用本隐私权政策：
						</p>
						<ol type="a">
							<li>
								您在使用《<i>单词块</i>》平台提供的搜索服务时输入的关键字信息；
							</li>
							<li>
								《<i>单词块</i>》收集到的您在《<i>单词块</i>》发布的有关信息数据，包括但不限于参与活动、成交信息及评价详情；
							</li>
							<li>
								违反法律规定或违反《<i>单词块</i>》规则行为及《<i>单词块</i>》已对您采取的措施。
							</li>
						</ol>
					</p>
				</li>
				<li>
					<h3>
						信息使用
					</h3>
					<p>
						<ol type="a">
							<li>
								《<i>单词块</i>》不会向任何无关第三方提供、出售、出租、分享或交易您的个人信息，除非事先得到您的许可，或该第三方和《<i>单词块</i>》（含《<i>单词块</i>》关联公司）单独或共同为您提供服务，且在该服务结束后，其将被禁止访问包括其以前能够访问的所有这些资料。
							</li>
							<li>
								《<i>单词块</i>》亦不允许任何第三方以任何手段收集、编辑、出售或者无偿传播您的个人信息。任何《<i>单词块</i>》平台用户如从事上述活动，一经发现，《<i>单词块</i>》有权立即终止与该用户的服务协议。
							</li>
							<li>
								为服务用户的目的，《<i>单词块</i>》可能通过使用您的个人信息，向您提供您感兴趣的信息，包括但不限于向您发出产品和服务信息，或者与《<i>单词块</i>》合作伙伴共享信息以便他们向您发送有关其产品和服务的信息（后者需要您的事先同意）。
							</li>
						</ol>
					</p>
				</li>
				<li>
					<h3>
						信息披露
					</h3>
					<p>
						<p>
							在如下情况下，《<i>单词块</i>》将依据您的个人意愿或法律的规定全部或部分的披露您的个人信息：
						</p>
						<ol type="a">
							<li>
								经您事先同意，向第三方披露；
							</li>
							<li>
								为提供您所要求的产品和服务，而必须和第三方分享您的个人信息；
							</li>
							<li>
								根据法律的有关规定，或者行政或司法机构的要求，向第三方或者行政、司法机构披露；
							</li>
							<li>
								如您出现违反中国有关法律、法规或者《<i>单词块</i>》服务协议或相关规则的情况，需要向第三方披露；
							</li>
							<li>
								如您是适格的知识产权投诉人并已提起投诉，应被投诉人要求，向被投诉人披露，以便双方处理可能的权利纠纷；
							</li>
							<li>
								在《<i>单词块</i>》平台上创建的某一交易中，如交易任何一方履行或部分履行了交易义务并提出信息披露请求的，《<i>单词块</i>》有权决定向该用户提供其交易对方的联络方式等必要信息，以促成交易的完成或纠纷的解决。
							</li>
							<li>
								其它《<i>单词块</i>》根据法律、法规或者网站政策认为合适的披露。
							</li>
						</ol>
					</p>
				</li>
				<li>
					<h3>
						信息存储和交换
					</h3>
					<p>
						《<i>单词块</i>》收集的有关您的信息和资料将保存在《<i>单词块</i>》及（或）其关联公司的服务器上，这些信息和资料可能传送至您所在国家、地区或《<i>单词块</i>》收集信息和资料所在地的境外并在境外被访问、存储和展示。
					</p>
				</li>
				<li>
					<h3>
						Cookie 的使用
					</h3>
					<p>
						<ol type="a">
							<li>
								在您未拒绝接受cookies的情况下，《<i>单词块</i>》会在您的计算机上设定或取用《<i>单词块</i>》，以便您能登录或使用依赖于cookies的《<i>单词块</i>》平台服务或功能。《<i>单词块</i>》使用cookies可为您提供更加周到的个性化服务，包括推广服务。
							</li>
							<li>
								您有权选择接受或拒绝接受cookies。您可以通过修改浏览器设置的方式拒绝接受cookies。但如果您选择拒绝接受cookies，则您可能无法登录或使用依赖于cookies的《<i>单词块</i>》网络服务或功能。
							</li>
							<li>
								通过《<i>单词块</i>》所设cookies所取得的有关信息，将适用本政策。
							</li>
						</ol>
					</p>
				</li>
				<li>
					<h3>
						信息安全
					</h3>
					<p>
						<ol type="a">
							<li>
								《<i>单词块</i>》帐号均有安全保护功能，请妥善保管您的用户名及密码信息。《<i>单词块</i>》将通过对用户密码进行加密等安全措施确保您的信息不丢失，不被滥用和变造。尽管有前述安全措施，但同时也请您注意在信息网络上不存在“完善的安全措施”。
							</li>
							<li>
								在使用《<i>单词块</i>》网络服务进行网上交易时，您不可避免的要向交易对方或潜在的交易对方披露自己的个人信息，如联络方式或者邮政地址。请您妥善保护自己的个人信息，仅在必要的情形下向他人提供。如您发现自己的个人信息泄密，尤其是《<i>单词块</i>》用户名及密码发生泄露，请您立即联络《<i>单词块</i>》客服，以便《<i>单词块</i>》采取相应措施。
							</li>
						</ol>
					</p>
				</li>
				<li>
					<h3>
						更新说明
					</h3>
					<p>
						重庆相对科技有限公司 公司保留随时更新本声明的权利，当声明发生修改时，我们会通过连窗或通知的方式告知您变更后的声明。如您继续使用我们的服务， 即视为您同意我们的变更后的隙私政策我们才会按照更新的声明收集、使用、存储您的个人信息。
					</p>
				</li>
			</ol>
			<footer class="my-10">
				<p class="text-right">
					本声明自更新之日起生效 <br>
					最近的更新日期：2020 年 12 月 31 日
				</p>
			</footer>
		</blockquote>
		<blockquote v-else-if="$i18n.locale === 'en'">
			<p class="text-indent">
				The <i>Word Block</i> application is a word memorizing product provided by Chongqing Relative Technology Co., Ltd. (hereinafter referred to as "Chongqing Relative Technology Co., Ltd."). Chongqing Relative Technology Co., Ltd. respects your personal information and data very much, and will do its best to protect the safety and reliability of your personal information and data. This policy only applies to user information and data collected and stored by the <i>Word Block</i> application.
			</p>

			<p class="text-indent">
				Before using the <i>WordBlock</i> application, please read carefully and understand and agree to the "<i>WordBlock</i> Application Privacy Policy". This policy stipulates how we collect, use, disclose, process and protect the information you provide to us when you use the <i>Word Block</i> application. If we need you to provide certain information to verify your identity when using the product and connect to our third-party service providers, we will strictly abide by this privacy policy to use this information. If you have started using the <i>Word Block</i> application, it means that you have read, approved and accepted all the terms described in this privacy policy, as well as any changes we may make at any time in the future.
			</p>

			<p class="text-indent">
				"<i>Word Block</i>" respects and protects the personal privacy of all service users. In order to provide you with more accurate and personalized services, "<i>Word Block</i>" will use and disclose your personal information in accordance with the provisions of this privacy policy. However, "<i>Word Block</i>" will treat this information with a high degree of diligence and prudence. Except as otherwise provided in this privacy policy, "<i>Word Block</i>" will not disclose this information or provide it to a third party without your prior permission. "<i>Word Block</i>" will update this privacy policy from time to time. When you agree to the "<i>Word Block</i>" service use agreement, you are deemed to have agreed to the entire content of this privacy policy. This privacy policy is an integral part of the "<i>Word Block</i>" service usage agreement.
			</p>

			<ol type="1">
				<li>
					<h3>
						Scope of application
					</h3>
					<p>
						<ol type="a">
							<li>
								When you register your "<i>Word Block</i>" account, you provide personal registration information according to the "<i>Word Block</i>" requirements;
							</li>
							<li>
								When you use the "<i>Word Block</i>" web service or visit the "<i>Word Block</i>" webpage, "<i>Word Block</i>" automatically receives and records you Information on your browser and computer, including but not limited to your IP address, browser type, language used, access date and time, software and hardware characteristics information, and web page records you require;
							</li>
							<li>
								"<i>Word block</i>" obtained user personal data from business partners through legal means.
							</li>
						</ol>

						<p>
							You understand and agree that the following information does not apply to this privacy policy:
						</p>
						<ol type="a">
							<li>
								The keyword information you enter when using the search service provided by the "<i>Word Block</i>" platform;
							</li>
							<li>
								"<i>Word Block</i>" collects relevant information and data that you publish in "<i>Word Block</i>", including but not limited to participation in activities, transaction information and evaluation details;
							</li>
							<li>
								Violation of the law or violation of the rules of "<i>Word Blocks</i>" and the measures that "<i>Word Blocks</i>" has taken against you.
							</li>
						</ol>
					</p>
				</li>
				<li>
					<h3>
						Information use
					</h3>
					<p>
						<ol type="a">
							<li>
								"<i>WordBlock</i>" will not provide, sell, rent, share or trade your personal information to any unrelated third party, unless you obtain your permission in advance, or the third party and "<i>WordBlock </i>" (including "<i>Word Block</i>" affiliates) provide services to you individually or jointly, and after the end of the service, it will be prohibited from accessing all these materials that it was able to access before.
							</li>
							<li>
								"<i>Word Block</i>" also does not allow any third party to collect, edit, sell or disseminate your personal information by any means. Any "<i>WordBlock</i>" platform user who engages in the above activities, once discovered, "<i>WordBlock</i>" has the right to immediately terminate the service agreement with the user.
							</li>
							<li>
								For the purpose of serving users, "<i>Word Block</i>" may use your personal information to provide you with information that you are interested in, including but not limited to sending you product and service information, or with "<i>Word Block</i>" partners share information so that they can send you information about their products and services (the latter requires your prior consent).
							</li>
						</ol>
					</p>
				</li>
				<li>
					<h3>
						Information disclosure
					</h3>
					<p>
						<p>
							Under the following circumstances, "<i>Word Block</i>" will disclose your personal information in whole or in part according to your personal wishes or legal requirements:
						</p>
						<ol type="a">
							<li>
								With your prior consent, disclose to a third party;
							</li>
							<li>
								In order to provide the products and services you request, you must share your personal information with third parties;
							</li>
							<li>
								Disclosure to a third party or administrative or judicial organization in accordance with relevant provisions of the law or the requirements of administrative or judicial institutions;
							</li>
							<li>
								If you violate relevant Chinese laws, regulations or the "<i>Word Block</i>" service agreement or related rules, you need to disclose to a third party;
							</li>
							<li>
								If you are a qualified intellectual property complainant and have filed a complaint, you should disclose it to the respondent at the request of the respondent so that both parties can deal with possible rights disputes;
							</li>
							<li>
								In a transaction created on the "<i>WordBlock</i>" platform, if any party to the transaction fulfills or partially fulfills the transaction obligation and requests for information disclosure, "<i>WordBlock</i>" The right to decide to provide the user with the necessary information such as the contact information of the counterparty to facilitate the completion of the transaction or the settlement of disputes.
							</li>
							<li>
								Other "<i>Word Blocks</i>" shall be disclosed as deemed appropriate in accordance with laws, regulations or website policies.
							</li>
						</ol>
					</p>
				</li>
				<li>
					<h3>
						Information storage and exchange
					</h3>
					<p>
						The information and data about you collected by "<i>WordBlock</i>" will be stored on the servers of "<i>WordBlock</i>" and/or its affiliates. These information and materials may be transmitted Go to your country, region or outside the country where the "<i>Word Block</i>" collects information and data, and is accessed, stored and displayed outside the country.
					</p>
				</li>
				<li>
					<h3>
						Use of cookies
					</h3>
					<p>
						<ol type="a">
							<li>
								If you do not refuse to accept cookies, "<i>Word Block</i>" will set or access "<i>Word Block</i>" on your computer so that you can log in or use "<i>Word Block</i>" platform services or functions that rely on cookies. "<i>Word block</i>" uses cookies to provide you with more thoughtful and personalized services, including promotional services.
							</li>
							<li>
								You have the right to choose to accept or refuse to accept cookies. You can refuse to accept cookies by modifying your browser settings. However, if you choose to refuse to accept cookies, you may not be able to log in or use "<i>Word Block</i>" network services or functions that rely on cookies.
							</li>
							<li>
								This policy will apply to the relevant information obtained through the cookies set by "<i>Word Block</i>".
							</li>
						</ol>
					</p>
				</li>
				<li>
					<h3>
						Information security
					</h3>
					<p>
						<ol type="a">
							<li>
								"<i>Word block</i>" account has security protection function, please keep your user name and password information properly. "<i>Word block</i>" will ensure that your information is not lost, abused or altered by encrypting user passwords and other security measures. Despite the aforementioned security measures, please note that there is no "perfect security measure" on the information network.
							</li>
							<li>
								When using the "<i>WordBlock</i>" network service for online transactions, you will inevitably disclose your personal information, such as contact information or postal address, to the counterparty or potential counterparty. Please properly protect your personal information and only provide it to others when necessary. If you find that your personal information has been leaked, especially the user name and password of "<i>WordBlock</i>", please contact "<i>WordBlock</i>" customer service immediately so that "<i>WordBlock</i>" >Word block</i>" Take corresponding measures.
							</li>
						</ol>
					</p>
				</li>
				<li>
					<h3>
						Release notes
					</h3>
					<p>
						Chongqing Relative Technology Co., Ltd. reserves the right to update this statement at any time. When the statement is modified, we will notify you of the changed statement through a window or notice. If you continue to use our services, it is deemed that you agree to our changed privacy policy and we will collect, use and store your personal information in accordance with the updated statement.
					</p>
				</li>
			</ol>
			<footer class="my-10">
				<p class="text-right">
					This statement is effective from the date of update <br>
					Last updated: December 31, 2020
				</p>
			</footer>
		</blockquote>
		<blockquote v-else-if="$i18n.locale === 'ja'">
			<p class="text-indent">
				<i>ワードブロック</i>アプリケーションは、重慶相対技術株式会社（以下「重慶相対技術株式会社」という）が提供する単語記憶製品である。 重慶相対技術有限責任会社は、お客様の個人情報およびデータを尊重し、お客様の個人情報およびデータの安全性と信頼性を保護するために最善を尽くします。 このポリシーは、<i>ワードブロック</i>アプリケーションによって収集および保存されたユーザー情報とデータにのみ適用されます。
			</p>

			<p class="text-indent">
				<i>ワードブロック</i>アプリケーションを使用する前に、「<i>ワードブロック</i>アプリケーションのプライバシーポリシー」をよく読み、理解して同意してください。 このポリシーは、<i>ワードブロック</i>アプリケーションを使用する際に、お客様から提供された情報を収集、使用、開示、処理、および保護する方法を指定します。 製品の使用時に本人確認のために特定の情報を提供し、サードパーティのサービスプロバイダーに接続する必要がある場合、この情報を使用するためにこのプライバシーポリシーを厳守します。 <i>ワードブロック</i>アプリケーションの使用を開始した場合は、このプライバシーポリシーに記載されているすべての条件と、今後いつでも変更を加える可能性があることを読み、承認し、同意したことを意味します。 。
			</p>

			<p class="text-indent">
				「<i>ワードブロック</i>」は、すべてのサービスユーザーの個人のプライバシーを尊重し、保護します。 より正確でパーソナライズされたサービスを提供するために、「<i>ワードブロック</i>」は、このプライバシーポリシーの規定に従って、お客様の個人情報を使用および開示します。 ただし、「<i>ワードブロック</i>」は、この情報を高度な注意と慎重さで扱います。 このプライバシーポリシーに別段の定めがある場合を除き、「<i>ワードブロック</i>」は、事前の許可なしにこの情報を開示したり、第三者に提供したりすることはありません。 「<i>ワードブロック</i>」は、このプライバシーポリシーを随時更新します。 「<i>ワードブロック</i>」サービス使用契約に同意すると、このプライバシーポリシーの内容全体に同意したものとみなされます。 このプライバシーポリシーは、「<i>ワードブロック</i>」サービス使用契約の不可欠な部分です。
			</p>

			<ol type="1">
				<li>
					<h3>
						適用範囲
					</h3>
					<p>
						<ol type="a">
							<li>
								「<i>ワードブロック</i>」アカウントを登録するときは、「<i>ワードブロック</i>」の要件に従って個人登録情報を提供します。
							</li>
							<li>
								「<i>ワードブロック</i>」ウェブサービスを使用するか、「<i>ワードブロック</i>」ウェブページにアクセスすると、「<i>ワードブロック</i>」は自動的に情報を受信して​​記録しますご使用のブラウザーおよびコンピューター上。これには、IPアドレス、ブラウザーの種類、使用言語、アクセス日時、ソフトウェアとハ​​ードウェアの特性情報、および必要なWebページの記録が含まれますがこれらに限定されません。
							</li>
							<li>
								「<i>ワードブロック</i>」は、法的手段を通じてビジネスパートナーからユーザーの個人データを取得しました。
							</li>
						</ol>

						<p>
							あなたは、以下の情報がこのプライバシーポリシーに適用されないことを理解し、同意します。
						</p>
						<ol type="a">
							<li>
								「<i>ワードブロック</i>」プラットフォームが提供する検索サービスを利用する際に入力するキーワード情報。
							</li>
							<li>
								「<i>ワードブロック</i>」は、「<i>ワードブロック</i>」で公開する関連情報とデータを収集します。これには、アクティビティへの参加、取引情報、評価の詳細が含まれますが、これらに限定されません。
							</li>
							<li>
								「<i>ワードブロック</i>」の法律違反または規則違反、および「<i>ワードブロック</i>」がお客様に対して講じた措置。
							</li>
						</ol>
					</p>
				</li>
				<li>
					<h3>
						情報の利用
					</h3>
					<p>
						<ol type="a">
							<li>
								「<i>ワードブロック</i>」は、事前に許可を得ない限り、個人情報を無関係の第三者、または第三者と「<i>ワードブロック</i>」に提供、販売、貸与、共有、または取引することはありません。 i> "（" <i>ワードブロック</i> "アフィリエイトを含む）は、個別または共同でサービスを提供し、サービスの終了後、以前にアクセスできたこれらすべての資料にアクセスすることは禁止されます。 。
							</li>
							<li>
								「<i>ワードブロック</i>」はまた、いかなる方法でも第三者があなたの個人情報を収集、編集、販売、または配布することを許可しません。 上記の活動に従事する「<i>ワードブロック</i>」プラットフォームユーザーは、発見されると、「<i>ワードブロック</i>」はユーザーとのサービス契約を直ちに終了する権利を有します。
							</li>
							<li>
								「<i>ワードブロック</i>」は、ユーザーにサービスを提供する目的で、お客様の個人情報を使用して、製品やサービスの情報の送信を含むがこれらに限定されない、お客様が関心のある情報を提供する場合があります。 <i>ワードブロック</i> "パートナーは情報を共有して、製品やサービスに関する情報を送信できるようにします（後者は事前の同意が必要です）。
							</li>
						</ol>
					</p>
				</li>
				<li>
					<h3>
						情報開示
					</h3>
					<p>
						<p>
							以下の状況では、「<i>ワードブロック</i>」は、個人の希望または法的要件に従って、個人情報の全部または一部を開示します。
						</p>
						<ol type="a">
							<li>
								事前の同意を得て、第三者に開示します。
							</li>
							<li>
								お客様が要求する製品およびサービスを提供するには、お客様の個人情報を第三者と共有する必要があります。
							</li>
							<li>
								法律の関連規定または行政機関または司法機関の要件に従った、第三者または行政機関または司法機関への開示。
							</li>
							<li>
								関連する中国の法律、規制、または「<i>ワードブロック</i>」サービス契約または関連規則に違反する場合は、第三者に開示する必要があります。
							</li>
							<li>
								あなたが資格のある知的財産の申立人であり、苦情を申し立てた場合は、両方の当事者が起こりうる権利紛争に対処できるように、回答者の要求に応じて回答者に開示する必要があります。
							</li>
							<li>
								「<i>ワードブロック</i>」プラットフォームで作成された取引において、取引のいずれかの当事者が取引義務を履行または部分的に履行し、情報開示を要求した場合、「<i>ワードブロック</i>」取引の完了または紛争の解決を容易にするために、取引相手の連絡先情報などの必要な情報をユーザーに提供することを決定します。
							</li>
							<li>
								その他の「<i>ワードブロック</i>」は、法律、規制、またはウェブサイトのポリシーに従って適切と見なされる場合に開示されるものとします。
							</li>
						</ol>
					</p>
				</li>
				<li>
					<h3>
						情報の保存と交換
					</h3>
					<p>
						「<i>ワードブロック</i>」によって収集されたお客様に関する情報およびデータは、「<i>ワードブロック</i>」および/またはその関連会社のサーバーに保存されます。これらの情報および資料は送信される場合があります。 「<i>ワードブロック</i>」が情報とデータを収集し、国外でアクセス、保存、表示される国、地域、または国外。
					</p>
				</li>
				<li>
					<h3>
						クッキーの使用
					</h3>
					<p>
						<ol type="a">
							<li>
								Cookieの受け入れを拒否しない場合、「<i>ワードブロック</i>」はコンピュータの「<i>ワードブロック</i>」を設定またはアクセスして、ログインまたは「<i>ワードブロック</i>」を使用できるようにします。 Cookieに依存する<i>ワードブロック</i> "プラットフォームサービスまたは機能。 「<i>ワードブロック</i>」はCookieを使用して、プロモーションサービスなど、より思慮深くパーソナライズされたサービスを提供します。
							</li>
							<li>
								あなたには、クッキーを受け入れるか受け入れるかを選択する権利があります。 ブラウザの設定を変更することにより、Cookieの受け入れを拒否できます。 ただし、Cookieの受け入れを拒否することを選択した場合、Cookieに依存する「<i>ワードブロック</i>」ネットワークサービスまたは機能にログインまたは使用できない場合があります。
							</li>
							<li>
								このポリシーは、「<i>ワードブロック</i>」によって設定されたCookieを介して取得された関連情報に適用されます。
							</li>
						</ol>
					</p>
				</li>
				<li>
					<h3>
						情報セキュリティー
					</h3>
					<p>
						<ol type="a">
							<li>
								「<i>ワードブロック</i>」アカウントにはセキュリティ保護機能がありますので、ユーザー名とパスワードの情報を正しく保管してください。 「<i>ワードブロック</i>」は、ユーザーパスワードの暗号化やその他のセキュリティ対策によって、情報が失われたり、悪用されたり、変更されたりしないようにします。 前述のセキュリティ対策にもかかわらず、情報ネットワークには「完全なセキュリティ対策」がないことに注意してください。
							</li>
							<li>
								「<i>ワードブロック</i>」ネットワークサービスをオンライン取引に使用する場合、連絡先情報や住所などの個人情報を相手方または潜在的な相手方に必然的に開示することになります。 個人情報は適切に保護し、必要な場合にのみ提供してください。 個人情報、特に「<i>ワードブロック</i>」のユーザー名とパスワードが漏洩した場合は、すぐに「<i>ワードブロック</i>」カスタマーサービスに連絡して「<i>ワードブロック</i>」対応する対策を講じてください。
							</li>
						</ol>
					</p>
				</li>
				<li>
					<h3>
						リリースノート
					</h3>
					<p>
						重慶相対技術株式会社は、いつでもこの声明を更新する権利を留保します。声明が変更された場合、ウィンドウまたは通知を通じて変更された声明を通知します。 あなたが私たちのサービスを継続して使用する場合、あなたは私たちの変更されたプライバシーポリシーに同意したとみなされ、私たちは更新された声明に従ってあなたの個人情報を収集、使用、保存します。
					</p>
				</li>
			</ol>
			<footer class="my-10">
				<p class="text-right">
					この声明は更新日から有効です <br>
					最終更新日：2020年12月31日
				</p>
			</footer>
		</blockquote>
	</main>
</template>
<script type="text/javascript">
import config from '@/config';
export default{
	head(){
		return {
			title: this.$t('privacy_policy').toCapitalizePhrases()
		}
	},
	data(){
		return {
			default_locale: config.locale.default
		}
	}
}
</script>