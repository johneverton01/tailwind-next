import { Search } from 'lucide-react'
import * as Input from '../input'
import { MainNavigation } from './MainNavigation'
import { Profile } from './Profile'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Logo } from './logo'

export function Sidebar() {
	return (
		<aside className='border-r border-zinc-200 px-5 py-8 flex flex-col gap-6'>
			<Logo />
			<Input.Root>
				<Input.Prefix>
					<Search className='h-5 w-5 text-zinc-500' />
				</Input.Prefix>
				<Input.Control placeholder='Search...' />
			</Input.Root>
			<MainNavigation />
			<UsedSpaceWidget />

			<div className='h-px bg-zinc-200' />

			<Profile />
		</aside>
	)
}
