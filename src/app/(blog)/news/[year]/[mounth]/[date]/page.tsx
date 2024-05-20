

export default function News({ params }: {
  params: {
    year: number,
    mounth: string,
    date: string
  },
}) {



  return (
    <div>
      новость {params.year}, {params.mounth}, {params.date}
      {/* <div dangerouslySetInnerHTML={{ __html: res.EventText }} /> */}

    </div>
  )
}

