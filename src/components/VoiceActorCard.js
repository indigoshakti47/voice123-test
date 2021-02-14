import React from "react";

import AudioPlayer from "./AudioPlayer";

import { highlightWords } from '../utils/highlightWords';

const defaultAvatar = 'https://pyxis.nymag.com/v1/imgs/15e/3c2/1e52eeee6519bf304285f31b3925657c15-02-korra.rsquare.w700.jpg'

export default function Card({ voiceActor, keywords }) {
	return (
		<div className="my-1 px-1 w-full md:w-1/3">
			<article className="overflow-hidden rounded-lg shadow-lg p-5 bg-white">
				<header className="flex items-center justify-between leading-tight p-2 md:p-4">
					<img alt="avatar" className="w-16 rounded-full border-2 border-gray-300" src={voiceActor.user.picture_small || defaultAvatar} />
					<h1 className="text-lg text-red-600">
						<a className="no-underline hover:underline text-black" target="__blank" href={`https://voice123.com/${voiceActor.user.username}`}>
							{voiceActor.user.name}
						</a>
					</h1>
				</header>
				<p className="italic text-gray-600 overflow-hidden text-overflow" dangerouslySetInnerHTML={{__html:highlightWords(voiceActor.summary, keywords)}} />
				<AudioPlayer relevantSample={voiceActor.relevant_sample} />
			</article>
		</div>
	);
}
