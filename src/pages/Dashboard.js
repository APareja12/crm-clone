import TicketCard from '../components/TicketCard'

const Dashboard = () => {

    const tickets = [
        {
           category: 'Q1 2022',
           color: 'red',
           title: 'NFT Safety 101 Video',
           owner: 'Ben Toes',
           avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
           status: 'done',
           priority: 5,
           progress: 40,
           description: 'Make a video showcasing how to work with NFTs safely',
           timestamp: '2022-02-11T07:36:17+0000'
        },
        {
           category: 'Q1 2022',
           color: 'blue',
           title: 'Build and sell AI',
           owner: 'Pete Nam',
           avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
           status: 'working on it',
           priority: 2,
           progress: 70,
           description: 'Make a video showcasing how to work with NFTs safely',
           timestamp: '2022-02-11T07:36:17+0000'
        },
        {
           category: 'Q2 2022',
           color: 'green',
           title: 'Build bots',
           owner: 'Prince Till',
           avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
           status: 'working on it',
           priority: 4,
           progress: 80,
           description: 'Make a video showcasing bots',
           timestamp: '2022-02-11T07:36:17+0000'
        }
    ]

    const uniqueCategories = [
        ...new Set(tickets?.map(({category}) => category))
    ]

    console.log(uniqueCategories)

  return (
    <div className="dashboard">
      <h1>My Projects</h1>
      <div className="ticket-container">
        {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
                <h3>{uniqueCategory}</h3>
                {tickets.filter(ticket => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                    <TicketCard
                        id={_index}
                        color={filteredTicket.color}
                        ticket={filteredTicket}
                    />
                ))
                }
            </div>
        ))}
      </div>

    </div>
  )
}

export default Dashboard
