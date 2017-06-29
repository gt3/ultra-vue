import Vue from 'vue'
import { Anchor } from 'ultra'

export function Anchor(props, ctx) {
	return <Anchor getUltra={() => ctx.services.ultra} {...props}  />
}

